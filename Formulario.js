import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  function registrarse(event) {
    event.preventDefault();

    if (contraseña === confirmarContraseña) {
      setMensaje("El registro se completó exitosamente.");
    } else {
      setMensaje("La contraseña no coincide, inténtelo nuevamente");
    }
  }

  return (
    <div className="mainContainer">
      <form action="" className="formContainer">

        <legend id="formTitle">FORMULARIO DE REGISTRO</legend>

        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input 
          type="email" 
          id="correo" 
          name="correo" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          required 
        />

        <label htmlFor="contraseña">Contraseña:</label>
        <input 
          type="password" 
          id="contraseña" 
          name="contraseña" 
          value={contraseña} 
          onChange={(e) => setContraseña(e.target.value)} 
          required 
        />

        <label htmlFor="confirmar-contraseña">Confirmar contraseña:</label>
        <input 
          type="password" 
          id="confirmarContraseña" 
          name="confirmarContraseña" 
          value={confirmarContraseña} 
          onChange={(e) => setConfirmarContraseña(e.target.value)} 
          required 
        />

        <button id='registrarse' type="button" onClick={registrarse}>Registrarse</button>

        <div id="mostrarMensaje" style={{color: mensaje === "El registro se completó exitosamente." ? "#138D75" : "#E74C3C", fontWeight: "bold"}}>
          {mensaje}
        </div>
      </form>
    </div>
  );
}

export default Formulario;