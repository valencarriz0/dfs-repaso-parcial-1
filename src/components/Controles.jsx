const Controles = ({ onCambiarUnidad, onCambiarClima, onVolverAlInicio }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
            <button onClick={onVolverAlInicio}>Volver al Inicio</button>
        </div>
    )
}

export default Controles