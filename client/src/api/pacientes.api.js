import axios from "axios"

const PacientesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/pacientes/api/v1/paciente/'
})

export const getAllPacientes = () => PacientesApi.get('/');

export const getPaciente = (id) => PacientesApi.get (`/${id}/`);

export const createPaciente = (Paciente) => PacientesApi.post('/', Paciente);

export const deletePaciente = (id) => PacientesApi.delete(`/${id}/`)

export const updatePaciente = (id, paciente) => PacientesApi.put(`/${id}/`,paciente)