import React from 'react'
import { StudentCard } from '../studentprofile/src/StudentCard'
import './App.css'


function App() {

  return (
    <div style={{display:"flex",justifyContent:"center", gap:"20px", flexWrap:"wrap"}}>
    <StudentCard image="/images.jpg" name="Ayesha" branch="IT" year="2026"/>
    <StudentCard image="/images.jpg" name="Bhavita" branch="IT" year="2026"/>
    <StudentCard image="/images.jpg" name="Srujana" branch="IT" year="2026"/>
    </div>
  )
}

export default App
