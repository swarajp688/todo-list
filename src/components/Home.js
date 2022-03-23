import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import Todos from "./Todos";
import NeedToLogIn from "./NeedToLogIn";
const Home = () => {
  const auth = useAuth();
  return (
    <div className="">
      {auth.user ? <Todos/> : <NeedToLogIn />}
    </div>
  )
}

export default Home;