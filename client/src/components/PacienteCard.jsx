import { useNavigate } from "react-router-dom"


export function PacientesCard({ paciente }) {

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 hover:bg-zinc-600 hover:cursor-pointer" 
        onClick={() =>{
          navigate( `/pacientes/${paciente.id}`)
        }}>
        <h1>{paciente.nombre}</h1>
        <p>{paciente.apellido}</p>
        <p>Habitación: {paciente.habitacion}</p>
        <p>Cama: {paciente.cama}</p>
        <p>Servicio: {paciente.servicio}</p>
      </div>
      
    )
}