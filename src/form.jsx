import { useState } from "react"

function StudentForm(){
      const [formData,setFormdata] = useState({
            name:"",
            role:"",
            email:"",
            password:""
      });
      function change(e){
            setFormdata({
                  ...formData,
                  [e.target.name]:e.target.value
            })
      }
      function hogaya(e){
            e.preventDefault();
            console.log(formData);
            setFormdata({
                  name:"",
                  role:"",
                  email:"",
                  password:""
            })
      }
      return(
            <>
                  <h1>Student Registration Form</h1>
            <form onSubmit={hogaya}>
                  <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={change}
                  value={formData.name}/>
                  <br/>

                  <input
                  type="text"
                  name="role"
                  onChange={change}
                  value={formData.role}
                  placeholder="Enter your role"/>
                  <br/>

                  <input
                  type="email"
                  name="email"
                  onChange={change}
                  value={formData.email}
                  placeholder="Enter your email"
                  />
                  <br/>

                  <input
                  type="password"
                  name="password"
                  onChange={change}
                  value={formData.password}
                  placeholder="Enter your password"
                  />
                  <br/> 

                  <button type="submit">Register</button>
            </form>
            </>
      )
}
export default StudentForm