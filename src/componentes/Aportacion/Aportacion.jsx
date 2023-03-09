import { useEffect, useState } from "react"
import { nuevoManejadorInputMonetario } from "../../lib"
import Saldo from "../Saldo/Saldo"

function Aportacion({importe=0}) {

    const [ nombre, setNombre ] = useState("")
    const [ inputCantidadPagada, setInputCantidadPagada ] = useState("")
    const [ cantidadPagada, setCantidadPagada ] = useState(0)
    const [ saldo, setSaldo ] = useState(0)

    function manejadorInputNombre(evento) {
        setNombre(evento.target.value)
    }

    const manejadorInputCantidadPagada = nuevoManejadorInputMonetario(setInputCantidadPagada, setCantidadPagada)

    useEffect(
        ()=>setSaldo( cantidadPagada - importe),
        [importe, cantidadPagada]
    )

    return (
        <li>
            <label>
            🧑<input type="text" placeholder="Nombre de fulanit@..." value={nombre} onInput={manejadorInputNombre}/>
            </label>
            <label>
            💸<input type="number" placeholder="€ pagados por fulanit@..." value={inputCantidadPagada} onInput={manejadorInputCantidadPagada}/>
            </label>
            <Saldo importe={saldo} />
        </li>
    )
}

export default Aportacion