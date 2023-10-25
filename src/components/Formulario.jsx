import { useState } from 'react'

const Formulario = ({onSubmit}) => {

    const [name, setName]       = useState("");
    const [email, setEmail]     = useState("");
    const [age, setAge]         = useState("");
    const [charger, setCharger] = useState("");
    const [phone, setPhone] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newWorjers = {
          id: Date.now(),
          nombre: name,
          correo: email,
          edad:   age,
          cargo: charger,
          telefono: phone
        };
    
        onSubmit(newWorjers)
        
        setName("");
        setEmail("");
        setAge("");
        setCharger("");
        setPhone("");
      }

    return(

        <form onSubmit={handleSubmit} className="ms-3">
          <h4 className='mt-5'>Nombre del colaborador</h4>
          <input onChange={(e) => setName(e.target.value)} type="text" className='w-50' placeholder="Ingresa el nombre del colaborador" value={name} required/>
         
          <h4 className='mt-3'>Correo del colaborador</h4>
          <input onChange={(e) => setEmail(e.target.value)}type="email" className='w-50' placeholder="Ingresa correo del colaborador" value={email} required/>

          <h4 className='mt-3'>Edad del colaborador</h4>
          <input onChange={(e) => setAge(e.target.value)}type="number" className='w-50' placeholder="Ingresa la edad del colaborador" value={age} required/>

          <h4 className='mt-3'>Cargo del colaborador</h4>
          <input onChange={(e) => setCharger(e.target.value)}type="text" className='w-50' placeholder="Ingresa correo del colaborador" value={charger} required/>

          <h4 className='mt-3'>Telefono del colaborador</h4>
          <input onChange={(e) => setPhone(e.target.value)}type="text" className='w-50' placeholder="Ingresa el telefono del colaborador" value={phone} required/>

          
          
          <button type='submit' className='d-flex btn btn-primary w-25 mt-4'>Agregar colaborador</button>
        </form>        
    )
}

export default Formulario;