import axios from "axios"

const API_URL = "http://localhost:8000"

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const getReadings = async () => {
    const response = await api.get("/readings")
    return response.data
}

export const openRoom = async (espacio = "Salon101") => {
    const response = await api.post("/admin/open-room", {
        espacio: espacio
    })

    return response.data
}