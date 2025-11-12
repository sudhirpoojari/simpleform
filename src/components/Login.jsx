import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
 

    console.log(username);
    console.log(password);

    if(username==''&& password==''){
      setError("Please enter username and password");
      return;

    }
   /* else if(!username.includes("@")){
      setError("Please enter a valid email address");
      return;
    } */
    setLoading(true)

   try{
    const response = await fetch('https://dummyjson.com/user/login',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        username:username,
        password:password,
      }),
    });

    const data = await response.json();
    if(response.ok){
     // setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    }
    else{
      setError(data.message || "Invalid Credentials");
    }
   }
   catch(error){
    setError("Network Error  Please try again");
   }
   finally{
    setLoading(false);
   }
  }

  return (
    <div className='flex p-2'>
       
        <form onSubmit={handleSubmit}>
           <h1 className='justify-center pl-10 bg-amber-200 text-3xl text-blue-800'>Login Page ... </h1> 
          <div className='flex-3 p-2 m-2  bg-gray-200'>
            <label>Username : </label>
            <input 
            type="text" 
            className='shadow-amber-300 ' 
            value={username} 
            name="username" 
            placeholder="Enter Username" 
             onChange={(e)=>setUsername(e.target.value)  }
            />
             <br />
              </div>
                     <div className='p-2 m-2  bg-gray-200'>
               <label>Password : </label>
             <input 
             type="password" 
             value={password} 
             name="password" 
             onChange={(e)=>setPassword(e.target.value)  }
             placeholder="Enter Password" 

              />
             </div>

             <div className=' pl-10 p-1 text-red-700 text-1xl'>{error}</div>

             <button type="submit" className='bg-blue-800 p-2 text-amber-50' disabled={loading}>
          {loading ? "Authenticating..." : "Login"}
        </button>

            

       {/*      {user && (
              <>
              <h3>Welcome, {user.username}!</h3>
              <p><b>Email : {user.email}</b></p>
              </>
             )}

        */}

         
          

        </form>
    </div>
  )
}

export default Login