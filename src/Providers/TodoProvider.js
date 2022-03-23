import { createContext } from "react";
import { useProvideAuth } from "../hooks/index.js";




const initialState = {
    user:false,
    login:()=> {},
    logout:()=>{},
    loading:true,
    signup:()=>{},
};




const  TodoContext = createContext(initialState);
const TodoProvider = (props) => {
    const auth = useProvideAuth();
    console.log(auth)
  return (
    <TodoContext.Provider value={auth}>{props.children}</TodoContext.Provider>
  )
}


export {
    TodoContext,
    TodoProvider,
}
