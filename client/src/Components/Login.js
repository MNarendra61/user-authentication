import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate();

  const [user,setUser] = useState({
    email : "",
    password : "",

  });

  // Handle input
  const handleInputChange = (event)=>{
    let name = event.target.name
    let value = event.target.value
    setUser({...user, [name]:value})
  }

  //Handle submit
  const handleLogin = async (event)=>{
    event.preventDefault();
  // object destructuring
  //store object data into varaiables
  const {email, password} = user ;
  try {
    // it is submitted on port 3000 by default
    // which is front end but we need to
    //submit on backend in which is on
    // port 5000.so we need proxy
    const res = await fetch ('/login',{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email,password
      })
    });
    console.log(res.status)

    if (res.status === 400 || !res) {
      window.alert ("Invalid credentials");
    } else {
      // you need to restart the server for proxy works
      // try again
      navigate('/')
      localStorage.setItem("user",user.email)
            window.alert ("Login successfully")
        window.location.reload ();

    }
  }catch (error) {
    console.log (error);
  }
}
// function Login() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: user.email,
//           password: user.password,
//         }),
//       });

//       if (res.status === 400 || !res) {
//         window.alert("Invalid credentials");
//       } else {
//         navigate("/");
//         window.alert("Login successful");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row ">
          <div
            className="col-md-5 d-flex flex-column form
          text-white justify-content-center align-items-center"
          >
            <h1 className="display-5 fw-bolder">Welcome Back</h1>
            <p className="lead ">Enter Your Credentials To Login</p>
            <h5 className="mb-4 ">OR</h5>
            <a
              href="/register"
              className="btn btn-outline-light 
            rounded-pill pb-2 w-50 "
            >
              Register
            </a>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Login</h1>

            <form onSubmit={handleLogin}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary rounded-pill w-100">
                
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
