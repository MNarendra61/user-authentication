import React from 'react'

const Navbar = () => {
  const isLogin=localStorage.getItem("user")
  console.log(isLogin)
  const logOut=()=>{
    localStorage.removeItem("user");
  }
  //  const {isUserLoggedIn,userAuthentication}= props
  // const location = useLocation();
  // console.log("location",location);
  return (
    <>

            <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        </ul>
        {/* onClick={() => userAuthentication()} */}
        {/* {isUserLoggedIn ? ( */}
  {isLogin ?
  <>
  <a href="/dashboard" className="button btn btn-outline-primary ms-auto px-4 rounded-pill">
      <i className="fa fa-user me-2"></i>Dashboard
    </a>
    <a href="/" onClick={logOut} className="button btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className="fa fa-sign-out me-2"></i>Logout
    </a>
  </>
  :
  <>
   <a href="/login" className="button btn btn-outline-primary ms-auto px-4 rounded-pill">
      <i className="fa fa-sign-in me-2"></i>Login
    </a>
    <a href="/register" className="button btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className="fa fa-user-plus me-2"></i>Register
    </a>
  </>
  }
    
  
   
 


    </div>
  </div>
</nav>
</>
  )
}

    


export default Navbar;


{/* // import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const navItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Contact', path: '/contact' },
//   { name: 'Login', path: '/login' },
//   { name: 'Register', path: '/register' },
//   { name: 'Dashboard', path: '/dashboard' },
// ];
 */}

{/* // const Navbar = () => { */}
{/* //   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => { */}
 {/* Check for authentication token or session on page load
   const authToken = localStorage.getItem('authToken');
   if (authToken) { */}
{/* //       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => { */}
{/* //     // Clear authentication token or session and update isLoggedIn state
//     localStorage.removeItem('authToken');
//     setIsLoggedIn(false);
//   };

//   return (
//     <nav>
//       <ul>
//         {navItems.map((item, index) => ( */}
{/* //           <li key={index} className={location.pathname === item.path ? 'active' : ''}>
//             <Link to={item.path}>{item.name}</Link>
//           </li>
//         ))}
//         {isLoggedIn ? ( */}
{/* //           <li><Link to="/dashboard">Dashboard</Link></li>
//         ) : (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </>
//         )}
//         {isLoggedIn && ( */}
{/* //           <li><button onClick={handleLogout}>Logout</button></li>
//         )}
//       </ul> */}
{/* //     </nav> */}
{/* //   );
// }; */}

{/* // export default Navbar; */}
