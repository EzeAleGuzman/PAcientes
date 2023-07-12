import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { PacientesPage } from './pages/PacientesPage/'
import {PacientesFormPage} from './pages/PacientesFormPage/'
import {Navegation} from './components/Navegation'
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
    <Navegation/>
      <Routes>
        <Route path="/" element={<Navigate to='/pacientes'/>}/>
        <Route path="/pacientes" element= {<PacientesPage />}/>
        <Route path="/pacientes-create" element= {<PacientesFormPage />}/>
        <Route path="/pacientes/:id" element= {<PacientesFormPage />}/>
      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  )
}


export default App