import React from 'react';

function Alert({ mensaje, tipo }) {
  return (
    <div className={`alert ${tipo === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert">
      {mensaje}
    </div>
  );
}

export default Alert;
