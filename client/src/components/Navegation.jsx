import {Link} from "react-router-dom"


export function Navegation() {
    return (
        <div className="flex justify-between py-3">
            <Link to='/pacientes' > <h1 className="font-bold text-3xl mb-4">vista pacientes</h1></Link>
            <button className="bg-blue-500 p-3 rounded-lg" >
            <Link to='/pacientes-create'> Ingresar Paciente</Link>
            </button>
        </div>
    )
}