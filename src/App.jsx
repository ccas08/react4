import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = (colaborador) => {
    if (Object.values(colaborador).some((valor) => valor === '')) {
      setAlerta({ mensaje: 'Todos los campos son requeridos', tipo: 'error' });
      return;
    }
    setColaboradores([...colaboradores, { ...colaborador, id: Date.now().toString() }]);
    setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
  };

  const colaboradoresFiltrados = colaboradores.filter((col) =>
    Object.values(col).some((valor) =>
      valor.toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <div className="container mt-5">
      <h1>Gestión de Colaboradores</h1>
      
      {alerta.mensaje && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <Buscador setFiltro={setFiltro} />
      <Formulario agregarColaborador={agregarColaborador} />
      <Listado colaboradores={filtro ? colaboradoresFiltrados : colaboradores} />
      
    </div>
    
  );
}

export default App;
