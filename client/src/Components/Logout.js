import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' ;
// import  {useRoutes} from 'react-router-dom';
// import Home from './Home';

// const Logout = () => {
//     const navigate  = useNavigate();
    
    // if(user){
    //     return <useRoutes path='/dashboard' />
    //   }
    //eslint-disable-next-line
    // const isLogout = useIsLogout();

    // const useIsLogout = async ()=>{
    // try {
    // const res = await fetch('/logout',{
    //     method : "GET",
    //     headers :{   
    //         Accept : "application/json",
    //         "Content-Type" : "application/json"
    //     },
    //     credentials : "include"
    // });
    // if(res.status === 401 || !res) {
    //     window.alert("please logout later");
    // }else{
    //     navigate('/');
    //     window.location.reload()
    // } 
    // } catch (error){
    // console.log(error)
    // }
    
    //     useEffect (()=>{
    //     isLogout();
    // },[]);  
    
    const useIsLogout = () => {
        const navigate = useNavigate();
      
        useEffect(() => {
          const fetchLogout = async () => {
            try {
              const res = await fetch('/logout', {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include"
              });
              if (res.status === 401 || !res) {
                window.alert("please logout later");
              } else {
                navigate('/');
                window.location.reload();
              }
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchLogout();
        }, [navigate]);
      };
      
      const Logout = () => {
        useIsLogout();
      
  return (
    <div>
                       <button  type="submit" class="btn btn-primary rounded-pill w-100"  > Logout
                </button>
    </div>
  )
}


export default Logout
