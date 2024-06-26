import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario/Formulario'

const App = () => {

  const [datosFormulario, setDatosFormulario] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <>
      <Formulario datosFormulario ={datosFormulario} setDatosFormulario={setDatosFormulario} />
    </>
  )
}

export default App
