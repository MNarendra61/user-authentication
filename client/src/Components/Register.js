import React,  {  useState } from 'react'
import { useNavigate } from 'react-router-dom' ;

const Register = () => {
  const navigate  = useNavigate();


  const [user,setUser] = useState({
    username : "",
    email : "",
    password : ""
  }); 

    //Handle inputs
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    setUser({...user, [name]:value});
  }

  //Handle submit
 const handleSubmit = async (event)=>{
    event.preventDefault();
    // object destructuring
    //store object data into varaiables
    const {username,email, password} = user ;
    try {
      // it is submitted on port 3000 by default
      // which is front end but we need to
      //submit on backend in which is on
      // port 5000.so we need proxy
      const res = await fetch ('/register',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username,email,password
        })
      })
      // console.log(res.status)
  
      if (res.status === 400 || !res) {
        window.alert ("Already used details");
      } else {
        // you need to restart the server for proxy works
        // try again
        window.alert ("Registration successfully");
        navigate ('/login')
      }
    }catch (error) {
      console.log (error)
    }
  } 
  


  return (
    <div>
                  <div className="container shadow my-5">
        <div className="row justify-content-end ">
          <div className="col-md-5 d-flex flex-column form
          text-white justify-content-center order-2 align-items-center">
            <h1 className="display-5 fw-bolder">Hello,Friend</h1>
            <p className="lead ">Enter Your Details Register</p>
            <h5 className="mb-4 ">OR</h5>
            <a href="/login"
              className="btn btn-outline-light 
            rounded-pill pb-2 w-50 ">Login </a>
          </div>
          <div className="col-md-6 p-5">
            
              <form onSubmit={handleSubmit} method='POST' >
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="username"
                    value= {user.username}
                    onChange= {handleInput}
                    />
                    </div>

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
                    value= {user.email}
                    onChange= {handleInput }
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
                    value= {user.password}
                    onChange= {handleInput}

                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    I agree Terms and Conditions
                  </label>
                </div>
                <button type="submit" class="btn btn-outline-primary rounded-pill w-100">
                  Register
                </button>
              
            </form>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Register
