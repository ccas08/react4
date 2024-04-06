import React from 'react';

function Buscador({ setFiltro }) {
  return (
    <div  className="mb-3">
      <input style={{marginBottom: '50px'}}
        type="text"
        className="form-control"
        placeholder="Buscar colaborador"
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
}

export default Buscador;
