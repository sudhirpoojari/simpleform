import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user)

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };



  return (
    <div >

    <div className="flex flex-row p-4">
      <div className="basis-1/6">
          <h2>Welcome,  👋
          <span className=" text-amber-700 text-1xl font-bold">{user?.firstName || "User"}</span></h2>

          </div>
      <div className="basis-2/6">
       <p><b>Email:</b> <span className=" text-amber-700 font-bold">{user?.email}</span></p>
       </div>      

       <div className="basis-1/6 align-top mb-25" >
       <button  className="basis-2/6  p-2 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/50 " onClick={handleLogout}>
        Logout
      </button>

       </div>  
   
    </div>


  
     
     
      <br />
      <div className="p-4">
       

      </div>
      
    </div>
  );
}


export default Dashboard;
