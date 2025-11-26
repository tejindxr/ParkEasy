
import axios from "axios"
import {API_URL} from "../config/api"

export const signup = async(email : string , password : string , role : string) =>{
    try{
        const response = await axios.post(`${API_URL}/auth/register` , {
            email ,
            password,
            role
        });
        return response.data;
    }
    catch(error : any){
        console.log("Registery error" , error.response?.data);
       throw error.response?.data?.error || "Signup error";
    }
}

export const login = async(email : string , password : string)=>{
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        });
        return response.data;
    }
    catch(error : any){
        console.log("Login error" , error.response?.data);
        throw error.response?.data?.error || "Login error";
    }
}