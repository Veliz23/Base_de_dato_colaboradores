import {BaseColaboradores} from './assets/db'
import { useState } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

const App = () => {
  const [workers, setWorkers] = useState(BaseColaboradores);
  const [search, setSearch]   = useState('');

  const onSubmit = (newWorjers) => {
    setWorkers([...workers, newWorjers])
  }
    return (
      <>
        <div id='container' className='bg-dark p-3'>
          <h1 className="text-white ms-3">Buscar Colaboradores</h1> 
          <input type="text" className='me-3 w-50' onChange={(e) => setSearch(e.target.value)} placeholder='Busca colaborador'/>
        </div>

        <Formulario onSubmit={onSubmit}/>

        <table className='table table-striped table-dark mt-5'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {
            workers.filter((worker) => {
              return search.toLowerCase() === ''
              ? worker
              : worker.nombre.toLowerCase().includes(search);
            })
            .map((worker) => {
              return <Listado key={worker.id} worker={worker}/>;
            })
          }
        </tbody>
        </table>
      </>
    )
    
  }
  
  export default App;