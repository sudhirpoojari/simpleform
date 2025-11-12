import React, { use, useState,useEffect } from 'react'
import axios from "axios";

export default function Application() {

  const proxy =  "http://localhost:8000";

        const[username,setUsername] = useState();
        const[password,setPassword] = useState();
        const[email,setEmail] = useState();
        const[address,setAddress] = useState();
        const [file, setFile] = useState(null);
        const[transaction,setTrancaction] = useState([]);
        const [selectedImage, setSelectedImage] = useState(null);
        const [EditId,setEditId] = useState(null);       

      function handleSubmit(e){
        e.preventDefault()     
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("file", file);
           if (editId === null) {
                fetch("http://localhost/noc/save_user.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then((data) => {
          alert(data); // shows PHP response
          //setTrancaction(true);
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });

           }
           else{

               axios.post("http://localhost/noc/update_gender.php", { id: editId, name, gender })
        .then(res => {
          alert(res.data.message);
          setEditId(null);
          setName("");
          setGender("");
          fetchData();
        });

           }       
    };

     useEffect(() => {  // automatically fetching data now
    fetchData();
  }, []);
      
const fetchData = () => { 
    axios.get("http://localhost/noc/fetch_data.php")
      .then(response => {
        setTrancaction(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }  
  //console.log(transaction);

     const handleEdit = (row) => {
      setEditId(row.id);   // ✅ Set edit mode
      setUsername(row.username);
      setPassword(row.password);
      setEmail(row.email);
      setAddress(row.address);

      
     };    

  return (
    <>    
<form onSubmit={handleSubmit} className="pl-10" >
    <input 
      type="text" 
      value={username} 
      onChange={(e)=>setUsername(e.target.value)} 
      name="username" 
      placeholder="Enter Username"
      className='mt-2 p-2 bg-amber-100 placeholder-gray-950 font-bold' /><br></br>

    <input type="password" 
      value={password} 
      onChange={(e)=>setPassword(e.target.value)} 
      name="password" 
      placeholder="Enter Password"
      className='mt-2 p-2 bg-amber-200 placeholder-gray-950 font-bold' /><br></br>

    <input type="email" 
      value={email} 
      placeholder="Enter Email"
      onChange={(e)=>setEmail(e.target.value)} 
      name="email" 
      className='mt-2 p-2 bg-amber-200 placeholder-gray-950 font-bold' /><br></br>

    <input type="file" accept=".jpg,.jpeg,.png,.pdf"
      onChange={(e) => setFile(e.target.files[0])}
      className='mt-2 p-2 bg-amber-200'
           />
  <br></br>    
    <label>
        <textarea
        name="address"
        value={address}        
        onChange={(e)=>setAddress(e.target.value)} 
        className='mt-2 p-2 bg-amber-200  from-green-300 placeholder-gray-950 font-bold'
        placeholder="Enter Address"
        />  
      </label>      
      <br></br>
    <input  type="submit" value="submit" className='bg-blue-600 rounded-5xl p-2 gap-2 gap-x-2' />
</form>

<p className='pl-7 text-3xl text-blue-500'>Listing Of Data</p> <br></br>
<div className='pl-7 '>
<table className=" border-collapse border border-spacing-2 border-gray-400">
  <thead>
    <tr>
      <th className='border border-gray-00 dark:border-gray-600'>Sl No</th>
      <th className='border border-gray-300 dark:border-gray-600'>Name</th>
      <th className='border border-gray-300 dark:border-gray-600'>Password</th>
      <th className='border border-gray-300 dark:border-gray-600'>Image</th>
      <th className='border border-gray-300 dark:border-gray-600'>Address</th>
        
    </tr>
  </thead>
  <tbody>  
       {transaction.length > 0 ? (
      transaction.map((row,index)=>(
        <tr  key={transaction.id} >
    <td   className="border border-gray-300 dark:border-gray-700">{index + 1}</td>
    <td   className="border border-gray-300 dark:border-gray-700">{row.applicant_addrs}</td>
    <td   className="border border-gray-300 dark:border-gray-700">{row.password}</td>
    <td   className="border border-gray-300 dark:border-gray-700">{row.email_id}</td>
   {/*} <td   className="border border-gray-300 dark:border-gray-700"><img src={"http://localhost/noc/"+ row.file} alt ={row.file} height="50" width="50" /> </td> */}
   <td>
      <img
      src={`http://localhost/noc/${row.file}`}
      alt={row.applicant_addrs}
      className="w-16 h-16 object-cover rounded cursor-pointer hover:scale-110 transition"
      onClick={() => setSelectedImage(`http://localhost/noc/${row.file}`)}
      />
   </td>
  
           </tr>
      ))): (
      <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
            )}     
  </tbody>
</table>


{/* MODAL POPUP */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="bg-white p-4 rounded shadow-lg max-w-3xl w-full max-h-[90vh] overflow-hidden"
      onClick={(e) => e.stopPropagation()} // Stop closing when clicking inside
    >

      {/* Scroll Container */}
      <div className="overflow-auto max-h-[80vh]">
        <img
          src={selectedImage}
          alt="Full View"
          className="w-full object-contain"
        />
      </div>

      <button
        onClick={() => setSelectedImage(null)}
        className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded w-full"
      >
        Close
      </button>
    </div>
  </div>
)}





</div>
    </>
  );
  
}
