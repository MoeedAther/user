import React, { useState,useEffect } from "react"
import Footer from "../components/footer";
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setBarcode1, setBarcode2 } from "../features/barcode"
import{setFullName, setEmail, setPhonenumber, setAccountBalance, setToken} from "../features/userdata"

function UserLogin() {
  const navigate = useHistory()
  const dispatch = useDispatch()
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const inputs={
      email: formValues.email,
      password: formValues.password
    }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  //form submission handler
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);

      const myInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      }
      console.log(inputs)
      const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/auth/user', myInit)
      // const response = await fetch('http://localhost:3001/api/auth/user', myInit)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      console.log(response)
      const data = await response.json()
      console.log(data)
      if (data.auth === "auth success") {
        dispatch(setBarcode1(data.firstbarcode));
        dispatch(setBarcode2(data.secondbarcode));
        dispatch(setFullName(data.userinfo.rfullname));
        dispatch(setEmail(data.userinfo.remail));
        dispatch(setPhonenumber(data.userinfo.rphonenumber));
        dispatch(setAccountBalance(data.userinfo.raccountbalance))
        dispatch(setToken(data.userinfo.rtoken))
        console.log(data.userinfo.rtoken)
        navigate.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="SampleImage"></img>
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
                <div className="form-outline mt-4">
                  <input type="email" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={formValues.email} name="email" onChange={handleChange} />
                  <label className="form-label" for="form3Example3">Email</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.email}</p>
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" className="form-control form-control-lg"
                    placeholder="Enter password" value={formValues.password} name="password" onChange={handleChange} />
                  <label className="form-label" for="form3Example4">Password</label>
                  <p style={{color:"red" ,fontSize:"13px"}}>{formErrors.password}</p>
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

                <div className="text-center text-lg-start mt-5  pt-2">
                  <input type="submit" className="btn btn-primary btn-lg" style={{ paddingleft: '2.5rem', paddingright: '2.5rem' }} value="Login" />
                  <p className="small fw-bold mt-2 pt-1 mb-4">Don't have an account? <Link to="/user-signup"
                    className="link-danger">Register</Link></p>
                </div>

              </form>
            </div>
          </div>
         
        </div>
        
      </section>
      <div className="height"><Footer /></div>
    </>
  )
}

export default UserLogin