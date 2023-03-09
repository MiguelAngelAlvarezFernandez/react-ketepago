function redondea(numero, cantidadeDecimais) {
    const desplazamentoComa = 10**cantidadeDecimais
    return Math.round(numero*desplazamentoComa)/desplazamentoComa
}

function esImporteMonetarioValido(stringImporte) {
    const expresionRegular = /^[0-9]+\.?[0-9]{0,2}$/
    // Empieza con uno o más números ^[0-9]+
    // seguidos opcionalmente de un punto \.?
    // terminado con entre cero y dos números [0-9]{0,2}$
    return expresionRegular.test(stringImporte)
}

function _manejadorInputImporteMonetario(evento, setterInput, setterValorNumerico) {
    if (esImporteMonetarioValido(evento.target.value)) {
        setterValorNumerico(
            redondea(
                parseFloat(evento.target.value),
                2
            )
        )
        setterInput(evento.target.value)
    }
    if ( evento.target.value === "" ) {
        setterValorNumerico(0)
        setterInput("")
    }
}

function nuevoManejadorInputMonetario(setterInput, setterValorNumerico) {
    return function (evento) {
        _manejadorInputImporteMonetario( evento,  setterInput, setterValorNumerico)
    }
}


export {
    redondea,
    esImporteMonetarioValido,
    nuevoManejadorInputMonetario
}