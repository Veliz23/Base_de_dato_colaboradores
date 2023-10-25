const Listado = ({worker, handleDelete}) => { 

    const {id, nombre, correo, edad, cargo, telefono} = worker;
    
    return(        
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{correo}</td>
            <td>{edad}</td>
            <td>{cargo}</td>
            <td>{telefono}</td>

        </tr>
    )
 }
 export default Listado;