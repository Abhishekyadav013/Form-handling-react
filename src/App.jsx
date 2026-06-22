import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  

  return (
    <form >
      <div>
        <h1>Form Handling in React</h1>
        <label> First-Name: </label>
        <input  />
        
        
      </div>

      <div>
        <label> Middle-Name: </label>
        <input />
      </div>

      <div>
        <label> Last-Name: </label>
        <input  />
       
      </div>

     
    </form>
  )
}


export default App;