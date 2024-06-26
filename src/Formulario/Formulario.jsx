import { useState } from "react";

const Formulario = ({ datosFormulario, setDatosFormulario }) => {

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const actualizarCampo = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });

    let mensajeError = "";
    if (name === "password" && value.length < 8 && value.length > 0) {
      mensajeError = "Debe contener al menos 8 caracteres";
    } else if (name === "confirmPassword" && value.length > 0 && value !== datosFormulario.password) {
      mensajeError = "Debe coincidir con la constraseña"
    } else if (name === "email" && value.length < 5 && value.length > 0) {
      mensajeError = "Debe contener al menos cinco caracteres"
    }
    else if (value.length < 2 && value.length > 0) {
      mensajeError = "Debe contener al menos dos caracteres"
    }

    setError({
      ...error,
      [name]: mensajeError
    });
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>

        <div>
          <label htmlFor="firstName"> First name </label>
          <input type="text" id="firstName" name="firstName" value={datosFormulario.firstName} onChange={actualizarCampo} />
          {
            error.firstName ? <p style={{ color: 'red' }}>{error.firstName}</p> : ''
          }
        </div><br />

        <div>
          <label htmlFor="lastName"> Last name </label>
          <input type="text" id="lastName" name="lastName" value={datosFormulario.lastName} onChange={actualizarCampo} />
          {
            error.lastName ? <p style={{ color: 'red' }}>{error.lastName}</p> : ''
          }
        </div><br />

        <div>
          <label htmlFor="email"> Email </label>
          <input type="email" id="email" name="email" value={datosFormulario.email} onChange={actualizarCampo} />
          {
            error.email ? <p style={{ color: 'red' }}>{error.email}</p> : ''
          }
        </div><br />

        <div>
          <label htmlFor="password"> Password </label>
          <input type="password" id="password" name="password" value={datosFormulario.password} onChange={actualizarCampo} />
          {
            error.password ? <p style={{ color: 'red' }}>{error.password}</p> : ''
          }
        </div><br />

        <div>
          <label htmlFor="confirmPassword"> Confirm password </label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={datosFormulario.confirmPassword} onChange={actualizarCampo} />
          {
            error.confirmPassword ? <p style={{ color: 'red' }}>{error.confirmPassword}</p> : ''
          }
        </div>

      </form>

    </>
  )

}
export default Formulario;