import React,{useState} from "react"
import Footer from "../components/footer";
import {Link, useHistory} from "react-router-dom"
import { useDispatch } from "react-redux"
import {setBarcode1,setBarcode2} from "../features/barcode"

function UserLogin()
{
  const navigate=useHistory()
  const dispatch=useDispatch()
   //State
   const [inputs, setInputs]=useState({
    email:"",
    password:""
  });

  //form input Handler
  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs, [name]: value})
  }


  //form submission handler
  const handleSubmit=async(event)=>{
    try {
      event.preventDefault()
      const myInit={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(inputs)
      }

      const response=await fetch('https://git.heroku.com/uvm-s.git/api/auth/user', myInit)
      if(!response.ok)
      {
        throw Error(response.statusText)
      }
      console.log(response)
      const data=await response.json()
      console.log(data)
      if(data.auth=="auth success")
      {
        dispatch(setBarcode1(data.firstbarcode));
        dispatch(setBarcode2(data.secondbarcode));
        navigate.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
    return(
<>
  <section className="vh-100 mt-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"></img>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="bi bi-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="bi bi-facebook"></i>
            </button>

            {/* <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button> */}
          </div>

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

           {/* Email input */}
          <div className="form-outline mb-4 mt-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email" onChange={handleChange} />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" name="password" onChange={handleChange} />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <input type="submit" className="btn btn-primary btn-lg" style={{paddingleft: '2.5rem', paddingright: '2.5rem'}} value="Loin"/>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/user-signup"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  </section>
  <Footer/>
</>
    )
}

export default UserLogin