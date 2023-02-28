import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import ProtectedRoute from './ProtectedRoute';
import React,  {useState} from 'react';

function App() {
  const [isUserLoggedIn,setUserLoggedIn] = useState (false)
  
  const userAuthentication = () => {
    setUserLoggedIn(!isUserLoggedIn)
  }

  // const [auth, setAuth] = useState(false);
  // const [auth1, setAuth1] = useState(true);
  
  // const isLoggedIn = async () => {  
  //   try {
  //     const res = await fetch('/auth', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       credentials: 'include'
  //     });
  
  //     if (res.status === 200) {
  //       setAuth(true);
  //       setAuth1(false);
  //     }
  //     if (res.status === 401) {
  //       setAuth(false);
  //       setAuth1(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // useEffect(() => {
  //   isLoggedIn();
  // }, []);
    
  return (
    <>
    <Navbar isUserLoggedIn={isUserLoggedIn} userAuthentication= {userAuthentication} />
     <Router>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/services" element={<Services />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/register" element={<Register />}></Route>
        <Route   path="/dashboard" element={<Dashboard />}></Route>
        <Route   path="/logout" element={<Logout />}></Route>

        {/* <ProtectedRoute  path="/login" element={Login} auth={auth1}  />
        <ProtectedRoute  path="/register" element={Register} auth={auth1} />
        <ProtectedRoute  path="/dashboard" element={Dashboard} auth={auth} />
        <ProtectedRoute  path="/logout" element={Logout} auth={auth} /> */}

        {/* <Route  path="/login" element={<ProtectedRoute><Login auth={auth1} /></ProtectedRoute>}></Route>
        <Route  path="/register" element={<ProtectedRoute><Register  auth={auth1} /></ProtectedRoute>}></Route>
        <Route  path="/dashboard" element={<ProtectedRoute><Dashboard auth={auth} /></ProtectedRoute>}></Route>
        <Route  path="/logout" element={<ProtectedRoute><Logout auth={auth} /></ProtectedRoute>}></Route> */}
        </Routes> 
     </Router> 
    <Footer /> 

    </>
  );
}


export default App;
