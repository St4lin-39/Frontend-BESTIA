import axios from "axios"

const API_URL = "http://localhost:8000"

const api = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type" : "application/json"
    }
})

export const openDoor = async () =>{
    try{
        const response = await api.post(
            "/open-door"
        )
        return response.data

    }catch(error){
        console.log("ERROR OPEN DOOR: " + error)
        throw error
    }
}

export const getRegistros = async () => {
    try{
        const response = await api.get(
            "/registros"
        )
        return response.data
    }catch(error){
        console.log("ERROR GET REGISTROS" + error)
        throw error
    }
}