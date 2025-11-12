import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/login" style={{ margin: "10px" }}> Login</Link>
     {/*} <Link to="/home" style={{ margin: "10px" }}>Home</Link>      
      <Link to="/signup" style={{ margin: "10px" }}>Contact</Link>
      <Link to="/complaint" style={{ margin: "10px" }}>Complaint</Link> */}
       <Link to="/application" style={{ margin: "10px" }}>Application</Link>
    </nav>
  )
}
