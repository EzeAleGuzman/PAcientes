import { useEffect } from 'react';
import { useForm} from 'react-hook-form'
import { createPaciente, deletePaciente, updatePaciente, getPaciente } from '../api/pacientes.api';
import {  useNavigate, useParams } from 'react-router-dom'
import {  toast } from "react-hot-toast"


export function PacientesFormPage() {
    const {register, handleSubmit, formState: {errors},
    setValue,
} = useForm();
    const navigate = useNavigate();
    const params = useParams();
   

    const onSubmit = handleSubmit(async data =>{
       if (params.id){
        await updatePaciente(params.id, data);
        toast.success('Datos Paciente Actualizados')
       }else {
        await createPaciente(data);
        toast.success('Paciente Creado')
       }
       navigate('/pacientes');
    });

    useEffect(() => {
    async function loadPaciente(){
        if (params.id){
            const { data } = await getPaciente(params.id);
            setValue("nombre", data.nombre)
            setValue("apellido", data.apellido)
            setValue("habitacion", data.habitacion)
            setValue("cama", data.cama)
            setValue("servicio", data.servicio)

        }
    }
    loadPaciente();    
    }, );

    return (
        <div className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
          <div>
            <label>Nombre:</label>
            <input 
            type="text" 
            placeholder="Nombre" 
            {...register("nombre", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"    
            />
            {errors.nombre && <span>El nombre es requerido</span>}
            <label>Apellido:</label>
            <input 
            type="text" 
            placeholder="Apellido" 
            {...register("apellido", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.apellido && <span>El apellido es requerido</span>}
            <label>Habitación:</label>
            <input 
            type="text" 
            placeholder="Habitación" 
            {...register("habitacion", { required: true })}  
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"  
            />
            {errors.habitacion && <span>La habitacion es requerida</span>}
          
            <label>Cama:</label>
            <input 
            type="text" 
            placeholder="Cama" 
            {...register("cama", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.cama && <span>La cama es requerida</span>}
            <label>Servicio:</label>
            <select {...register("servicio", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
              <option value="Polivalente">Polivalente</option>
              <option value="Clinica Medica">Clinica Medica</option>
              <option value="Guardia Adultos">Guardia Adultos</option>
            </select>
            {errors.servicio && <span>El servicio es requerido</span>}
          </div>
          <button className="bg-green-500 p-3 rounded-lg block w-full mt-3" type="submit">Guardar</button>
        </form>

        {params.id && <button className="bg-red-500 p-3 rounded-lg block w-full mt-3" 
        onClick={async() => {
        const accepted = window.confirm('Estas seguro de borrar el paciente')
        if (accepted){
            await deletePaciente(params.id);
            toast.success('Paciente Borrado');
            navigate('/pacientes');
        }
        
        }}>Borrar</button> }
        
      </div>
    );
  }