import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  const [clima, setClima] = useState('Soleado')

  const volverAlInicio=()=> {
    setUnidad('Celsius')
    setClima('Soleado')
  }

  const cambiarUnidad = () => {
    unidad==="Celsius" ? setUnidad ("Fahrenheit"):setUnidad ("Celsius")
  }

  const cambiarClima = (estado) => {
    setClima(estado)
  }

  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima} onVolverAlInicio={volverAlInicio}/>
      <Display unidad={unidad} clima={clima} />
    </div>
  )
}

export default App
