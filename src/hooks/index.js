/* eslint-disable eqeqeq */
import { useContext, useState } from "react";
import { TodoContext } from "../Providers/TodoProvider";
import { useToasts } from "react-toast-notifications";

export const useAuth = ()=> {
    return useContext(TodoContext);
}


export const useProvideAuth = ()=> {
    const [user,setuser]= useState(false);
    const {addToast}=useToasts();
    
    const signup = (email,password)=>{
        if(!email  || !password ){
            return addToast("Email password cannot be blank",{
                autoDismiss:true,
                appearance:'error'
            })
        }
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }
    const login =  (email,password)=>{
        const localEmail = localStorage.getItem("Email");
        const localPassword = localStorage.getItem("Password");
        
        if(!email || !password){
            return addToast("Email password cannot be blank",{
                autoDismiss:true,
                appearance:'error'
            })
        }    

        if(localPassword === password || localEmail === email){
            setuser(true);
            
        }

        if(localPassword !== password || localEmail !== email){
            return addToast("Wrong Email/Password Combiantion",{
                autoDismiss:true,
                appearance:'error'
            })
        }else {
            return addToast("You are Ready to go", {
                autoDismiss:true,
                appearance:'success'
            })
        }
    }
    
    return {
        signup,
        login,
        user,
        
    }
}