import { useEffect, useState } from "react"
import { redondea } from "../../lib"

function Saldo({importe}) {

    const [claseParaElSaldo, setClaseParaElSaldo] = useState("saldado")
    const [imagen, setImagen] = useState("")

    useEffect(
        ()=>{
            if (importe < 0) { 
                setClaseParaElSaldo("deudor")
                setImagen("🏴‍☠️")
            }
            if (importe === 0) {
                setClaseParaElSaldo("saldado")
                setImagen("👌")
            }
            if (importe > 0) {
                setClaseParaElSaldo("acreedor")
                setImagen("💰")
            }
        },
        [importe]
    )

    return (
        <>
            <span className={claseParaElSaldo}>
                {imagen}
                {redondea(importe,2)}€
            </span>
        </>
    )
}

export default Saldo