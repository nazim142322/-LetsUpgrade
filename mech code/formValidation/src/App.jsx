import { useState } from 'react'
import './App.css'
function App() {
  const [user, setUser]= useState(
    {
      username:"",
      email:"",
      mobile:"",
      password:"",
      confirmPass:""
  });
  const [validation, setValidation]=useState({});
  function handleInput(event){
    // console.log(event.target.name);
    // console.log(event.target.value);
    setUser((pre)=>{return{...pre, [event.target.name]:event.target.value}})
  }
  function handleSubmit(event){
    event.preventDefault();  
   if(user.username==""){
    setValidation({username:"enter username"})   
   }
   if(user.email==""){
    setValidation({email:"enter username"})
   }
   if(user.mobile==""){
    setValidation({mobile:"enter mobile no"})
   }
   if(user.password==""){
    setValidation({password:"enter password"})
   }
   if(user.confirmPass==""){
    setValidation({confirmPass:"re-renter password"})
   }
}
    return (
    <div className="formContainer">
      <h2>Instagram</h2>
      <form className="regForm" onSubmit={handleSubmit} autoComplete='off'>
        <div className="fromControl">
            <input type="text" placeholder='Username' name="username" onChange={handleInput} value={user.username}/>
            <span>{validation.username}</span>
        </div>
        <div className="fromControl">
            <input type="text" placeholder='Email' name="email" onChange={handleInput} value={user.email}/>
            <span>{validation.email}</span>
        </div>
        <div className="fromControl">
             <input type="text" placeholder="Mobile Number" name="mobile" onChange={handleInput} value={user.mobile} />
             <span>{validation.mobil}</span>
        </div>        
         <div className="fromControl">
             <input type="password" placeholder="password" name="password" onChange={handleInput} value={user.password} />
             <span>{validation.password}</span>
         </div>
         <div className="fromControl">
              <input type="password" placeholder="confirm password" name="confirmPass" onChange={handleInput} value={user.confirmPass}/>
              <span>{validation.confirmPass}</span>
         </div>       
         <button>Sign up</button>    
      </form>
          
    </div>
  )
}

export default App
