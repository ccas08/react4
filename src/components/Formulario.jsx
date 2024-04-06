import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ agregarColaborador }) {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setColaborador({ ...colaborador, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoColaborador = {
        ...colaborador,
        id: uuidv4() // Genera un ID único usando uuid
      };
      console.log(nuevoColaborador)
    agregarColaborador(nuevoColaborador);
    setColaborador({ nombre: '', correo: '', edad: '', cargo: '', telefono: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={colaborador.nombre}
          onChange={handleChange}
          required
        />
        <label htmlFor="correo" className="form-label">Correo</label>
        <input
          type="text"
          className="form-control"
          id="correo"
          name="correo"
          value={colaborador.correo}
          onChange={handleChange}
          required
        />
        <label htmlFor="edad" className="form-label">Edad</label>
        <input
          type="text"
          className="form-control"
          id="edad"
          name="edad"
          value={colaborador.edad}
          onChange={handleChange}
          required
        />
        <label htmlFor="cargo" className="form-label">Cargo</label>
        <input
          type="text"
          className="form-control"
          id="cargo"
          name="cargo"
          value={colaborador.cargo}
          onChange={handleChange}
          required
        />
        <label htmlFor="telefono" className="form-label">Telefono</label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          name="telefono"
          value={colaborador.telefono}
          onChange={handleChange}
          required
        />

      </div>
      
      {/* Repite esto para cada campo: correo, edad, cargo, y teléfono */}
      <button style={{marginBottom: "20px"}} type="submit" className="btn btn-primary">Agregar Colaborador</button>
      
    </form>
    
  );
}

export default Formulario;
