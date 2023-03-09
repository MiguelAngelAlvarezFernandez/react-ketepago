import { useState, useEffect } from 'react';
import './App.css';
import Aportacion from './componentes/Aportacion/Aportacion';
import { nuevoManejadorInputMonetario, redondea } from './lib';

function App() {

  const [ inputNumeroParticipantes, setInputNumeroParticipantes ] = useState("2")
  const [ inputTotalAPagar, setInputTotalAPagar ] = useState("0")
  const [ totalAPagar, setTotalAPagar ] = useState(0)
  const [ numeroDeParticipantes, setNumeroDeParticipantes] = useState(0)
  const [totalPorPersona, setTotalPorPersona] = useState(0)
  const [elementosAportacion, setElementosAportacion] = useState([])

  function manejadorNumeroParticipantes(evento) {
    setInputNumeroParticipantes(evento.target.value)
    setNumeroDeParticipantes(parseInt(evento.target.value))
  }

  const manejadorTotalAPagar = nuevoManejadorInputMonetario(setInputTotalAPagar, setTotalAPagar)

  useEffect(
    ()=>{
      setTotalPorPersona(
        redondea(totalAPagar/numeroDeParticipantes,2)
      )
    },
    [numeroDeParticipantes,totalAPagar]
  )

  useEffect(
    ()=>{
      const nuevaListaAportaciones = []
      let identificadorAportacion = 0
      while (nuevaListaAportaciones.length < numeroDeParticipantes) {
        nuevaListaAportaciones.push(
          <Aportacion
            importe={totalPorPersona}
            key={identificadorAportacion++}
          />
        )
      }
      setElementosAportacion(nuevaListaAportaciones)
    },
    [totalPorPersona,numeroDeParticipantes]
  )

  return (
    <>

    <h1>Ketepago</h1>
    <label>
      🫰<input type='number' value={inputTotalAPagar} onInput={manejadorTotalAPagar}/>
    </label>
    <label>
      🧑🏻‍🤝‍🧑🏿<input type="range" min={2} max={10} value={inputNumeroParticipantes} onInput={manejadorNumeroParticipantes}/>
    </label>

    {elementosAportacion.length > 0 ? <ul>{elementosAportacion}</ul> : <p>Añade participantes e importe total...</p>}

    </>
  );
}

export default App;
