import {useEffect, useState} from 'react'
import { getAllPacientes } from '../api/pacientes.api'
import { PacientesCard } from '../components/PacienteCard';




export function PacientesList() {
    const [pacientes, setPacientes] = useState([]);
  
    useEffect(() => {
      async function loadPacientes() {
          const res = await getAllPacientes();
          setPacientes(res.data);
      }
      loadPacientes();
  }, []);
    return (
        <div className='grid grid-cols-1 gap-2' >
            {pacientes.map((paciente) => (
                
          <PacientesCard key={paciente.id} paciente={paciente}/>
        
            ))}
        </div>
    );
}

