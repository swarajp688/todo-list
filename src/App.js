import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp';


function App() {

  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
