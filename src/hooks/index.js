import { useContext, useState } from "react";
import { TodoContext } from "../Providers/TodoProvider";


export const useAuth = ()=> {
    return useContext(TodoContext);
}


export const useProvideAuth = ()=> {
    const [user,setuser]= useState(false);
   
    const signup = (email,password)=>{
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }
    const login =  (email,password)=>{
        const localEmail = localStorage.getItem("Email");
        const localPassword = localStorage.getItem("Password");
        
        

        if(localPassword === password || localEmail === email){
            setuser(true);
            return alert('correct password')
        }

        if(localPassword !== password || localEmail !== email){
            return alert('Wrong')
        }else {
            return alert('correct');
        }
    }
    return {
        signup,
        login,
        user,
    }
}