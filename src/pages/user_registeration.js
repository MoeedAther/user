import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Footer from "../components/footer"


function UserRegisteration() {

  const navigate=useHistory()
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  var inputs = {
    firstname: formValues.firstname,
    lastname: formValues.lastname,
    countrycode: formValues.countrycode,
    email: formValues.email,
    phonenumber: formValues.phonenumber,
    password: formValues.password
  }
  console.log(inputs)


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
      console.log(values.firstname)
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.countrycode) {
      errors.countrycode = "Select country Code!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "Phonenumber is required!";
    }
    if (!values.Register) {
      errors.Register = "Select an option!";
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
  //form input Handler
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs({ ...inputs, [name]: value })
  // }


  //form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const myInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      }

      const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/register/user', myInit)
      // const response = await fetch('http://localhost:3001/api/register/user', myInit)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      console.log(response)
      const data = await response.json()
      console.log(data)

      //On successful registeration navigating to login
      navigate.push('/')

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <section className="mt-3">
        <div className="container-fluid h-custom mb-3">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="sampleImg"></img>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Register with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="bi bi-google"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="bi bi-facebook"></i>
                  </button>
                </div>
                {/* <div className=" mt-4 justify-content-between align-items-center">
                  <select value={formValues.Register} name="Register" onChange={handleChange} className="form-control form-control-lg color-grey1">
                    <option value="" label="Register as" selected className="selectDefault">Register as</option>
                    <option value="user">User</option>
                    <option value="vendor">Vendor</option>
                  </select>
                  <label className="form-label" for="form3Example4">Register as </label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.Register}</p>
                </div> */}

                {/* First Name input */}
                <div className="form-outline mb-4 mt-3">
                  <input type="text" className="form-control form-control-lg"
                    placeholder="Enter first name" value={formValues.firstname} name="firstname" onChange={handleChange} />
                  <label className="form-label" for="form3Example3">First Name</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.firstname}</p>
                </div>

                {/* Last Name input */}
                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg"
                    placeholder="Enter last name" value={formValues.lastname} name="lastname" onChange={handleChange} />
                  <label className="form-label" for="form3Example3">Last Name</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.lastname}</p>
                </div>
                {/* Country */}
                <div className="form-outline mb-4">
                  <select className="form-control form-control-lg color-grey1" value={formValues.countrycode} name="countrycode" onChange={handleChange}>
                    <option value="" label="Select Country" selected className="selectDefault">Select Country</option>
                    <option value="--">Not Specified</option>
                    <option value="AFG">Afghanistan</option>
                    <option value="ALA">Aland Islands</option>
                    <option value="ALB">Albania</option>
                    <option value="DZA">Algeria</option>
                    <option value="ASM">American Samoa</option>
                    <option value="AND">Andorra</option>
                    <option value="AGO">Angola</option>
                    <option value="AIA">Anguilla</option>
                    <option value="ATA">Antarctica</option>
                    <option value="ATG">Antigua and Barbuda</option>
                    <option value="ARG">Argentina</option>
                    <option value="ARM">Armenia</option>
                    <option value="ABW">Aruba</option>
                    <option value="AUS">Australia</option>
                    <option value="AUT">Austria</option>
                    <option value="AZE">Azerbaijan</option>
                    <option value="BHS">Bahamas</option>
                    <option value="BHR">Bahrain</option>
                    <option value="BGD">Bangladesh</option>
                    <option value="BRB">Barbados</option>
                    <option value="BLR">Belarus</option>
                    <option value="BEL">Belgium</option>
                    <option value="BLZ">Belize</option>
                    <option value="BEN">Benin</option>
                    <option value="BMU">Bermuda</option>
                    <option value="BTN">Bhutan</option>
                    <option value="BOL">Bolivia</option>
                    <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BIH">Bosnia and Herzegovina</option>
                    <option value="BWA">Botswana</option>
                    <option value="BVT">Bouvet Island</option>
                    <option value="BRA">Brazil</option>
                    <option value="IOT">British Indian Ocean Territory</option>
                    <option value="BRN">Brunei Darussalam</option>
                    <option value="BGR">Bulgaria</option>
                    <option value="BFA">Burkina Faso</option>
                    <option value="BDI">Burundi</option>
                    <option value="KHM">Cambodia</option>
                    <option value="CMR">Cameroon</option>
                    <option value="CAN">Canada</option>
                    <option value="CPV">Cape Verde</option>
                    <option value="CYM">Cayman Islands</option>
                    <option value="CAF">Central African Republic</option>
                    <option value="TCD">Chad</option>
                    <option value="CHL">Chile</option>
                    <option value="CHN">China</option>
                    <option value="CXR">Christmas Island</option>
                    <option value="CCK">Cocos (Keeling) Islands</option>
                    <option value="COL">Colombia</option>
                    <option value="COM">Comoros</option>
                    <option value="COG">Congo</option>
                    <option value="COD">Congo, Democratic Republic of the Congo</option>
                    <option value="COK">Cook Islands</option>
                    <option value="CRI">Costa Rica</option>
                    <option value="CIV">Cote D'Ivoire</option>
                    <option value="HRV">Croatia</option>
                    <option value="CUB">Cuba</option>
                    <option value="CUW">Curacao</option>
                    <option value="CYP">Cyprus</option>
                    <option value="CZE">Czech Republic</option>
                    <option value="DNK">Denmark</option>
                    <option value="DJI">Djibouti</option>
                    <option value="DMA">Dominica</option>
                    <option value="DOM">Dominican Republic</option>
                    <option value="ECU">Ecuador</option>
                    <option value="EGY">Egypt</option>
                    <option value="SLV">El Salvador</option>
                    <option value="GNQ">Equatorial Guinea</option>
                    <option value="ERI">Eritrea</option>
                    <option value="EST">Estonia</option>
                    <option value="ETH">Ethiopia</option>
                    <option value="FLK">Falkland Islands (Malvinas)</option>
                    <option value="FRO">Faroe Islands</option>
                    <option value="FJI">Fiji</option>
                    <option value="FIN">Finland</option>
                    <option value="FRA">France</option>
                    <option value="GUF">French Guiana</option>
                    <option value="PYF">French Polynesia</option>
                    <option value="ATF">French Southern Territories</option>
                    <option value="GAB">Gabon</option>
                    <option value="GMB">Gambia</option>
                    <option value="GEO">Georgia</option>
                    <option value="DEU">Germany</option>
                    <option value="GHA">Ghana</option>
                    <option value="GIB">Gibraltar</option>
                    <option value="GRC">Greece</option>
                    <option value="GRL">Greenland</option>
                    <option value="GRD">Grenada</option>
                    <option value="GLP">Guadeloupe</option>
                    <option value="GUM">Guam</option>
                    <option value="GTM">Guatemala</option>
                    <option value="GGY">Guernsey</option>
                    <option value="GIN">Guinea</option>
                    <option value="GNB">Guinea-Bissau</option>
                    <option value="GUY">Guyana</option>
                    <option value="HTI">Haiti</option>
                    <option value="HMD">Heard Island and Mcdonald Islands</option>
                    <option value="VAT">Holy See (Vatican City State)</option>
                    <option value="HND">Honduras</option>
                    <option value="HKG">Hong Kong</option>
                    <option value="HUN">Hungary</option>
                    <option value="ISL">Iceland</option>
                    <option value="IND">India</option>
                    <option value="IDN">Indonesia</option>
                    <option value="IRN">Iran, Islamic Republic of</option>
                    <option value="IRQ">Iraq</option>
                    <option value="IRL">Ireland</option>
                    <option value="IMN">Isle of Man</option>
                    <option value="ISR">Israel</option>
                    <option value="ITA">Italy</option>
                    <option value="JAM">Jamaica</option>
                    <option value="JPN">Japan</option>
                    <option value="JEY">Jersey</option>
                    <option value="JOR">Jordan</option>
                    <option value="KAZ">Kazakhstan</option>
                    <option value="KEN">Kenya</option>
                    <option value="KIR">Kiribati</option>
                    <option value="PRK">Korea, Democratic People's Republic of</option>
                    <option value="KOR">Korea, Republic of</option>
                    <option value="XKX">Kosovo</option>
                    <option value="KWT">Kuwait</option>
                    <option value="KGZ">Kyrgyzstan</option>
                    <option value="LAO">Lao People's Democratic Republic</option>
                    <option value="LVA">Latvia</option>
                    <option value="LBN">Lebanon</option>
                    <option value="LSO">Lesotho</option>
                    <option value="LBR">Liberia</option>
                    <option value="LBY">Libyan Arab Jamahiriya</option>
                    <option value="LIE">Liechtenstein</option>
                    <option value="LTU">Lithuania</option>
                    <option value="LUX">Luxembourg</option>
                    <option value="MAC">Macao</option>
                    <option value="MKD">Macedonia, the Former Yugoslav Republic of</option>
                    <option value="MDG">Madagascar</option>
                    <option value="MWI">Malawi</option>
                    <option value="MYS">Malaysia</option>
                    <option value="MDV">Maldives</option>
                    <option value="MLI">Mali</option>
                    <option value="MLT">Malta</option>
                    <option value="MHL">Marshall Islands</option>
                    <option value="MTQ">Martinique</option>
                    <option value="MRT">Mauritania</option>
                    <option value="MUS">Mauritius</option>
                    <option value="MYT">Mayotte</option>
                    <option value="MEX">Mexico</option>
                    <option value="FSM">Micronesia, Federated States of</option>
                    <option value="MDA">Moldova, Republic of</option>
                    <option value="MCO">Monaco</option>
                    <option value="MNG">Mongolia</option>
                    <option value="MNE">Montenegro</option>
                    <option value="MSR">Montserrat</option>
                    <option value="MAR">Morocco</option>
                    <option value="MOZ">Mozambique</option>
                    <option value="MMR">Myanmar</option>
                    <option value="NAM">Namibia</option>
                    <option value="NRU">Nauru</option>
                    <option value="NPL">Nepal</option>
                    <option value="NLD">Netherlands</option>
                    <option value="ANT">Netherlands Antilles</option>
                    <option value="NCL">New Caledonia</option>
                    <option value="NZL">New Zealand</option>
                    <option value="NIC">Nicaragua</option>
                    <option value="NER">Niger</option>
                    <option value="NGA">Nigeria</option>
                    <option value="NIU">Niue</option>
                    <option value="NFK">Norfolk Island</option>
                    <option value="MNP">Northern Mariana Islands</option>
                    <option value="NOR">Norway</option>
                    <option value="OMN">Oman</option>
                    <option value="PAK">Pakistan</option>
                    <option value="PLW">Palau</option>
                    <option value="PSE">Palestinian Territory, Occupied</option>
                    <option value="PAN">Panama</option>
                    <option value="PNG">Papua New Guinea</option>
                    <option value="PRY">Paraguay</option>
                    <option value="PER">Peru</option>
                    <option value="PHL">Philippines</option>
                    <option value="PCN">Pitcairn</option>
                    <option value="POL">Poland</option>
                    <option value="PRT">Portugal</option>
                    <option value="PRI">Puerto Rico</option>
                    <option value="QAT">Qatar</option>
                    <option value="REU">Reunion</option>
                    <option value="ROM">Romania</option>
                    <option value="RUS">Russian Federation</option>
                    <option value="RWA">Rwanda</option>
                    <option value="BLM">Saint Barthelemy</option>
                    <option value="SHN">Saint Helena</option>
                    <option value="KNA">Saint Kitts and Nevis</option>
                    <option value="LCA">Saint Lucia</option>
                    <option value="MAF">Saint Martin</option>
                    <option value="SPM">Saint Pierre and Miquelon</option>
                    <option value="VCT">Saint Vincent and the Grenadines</option>
                    <option value="WSM">Samoa</option>
                    <option value="SMR">San Marino</option>
                    <option value="STP">Sao Tome and Principe</option>
                    <option value="SAU">Saudi Arabia</option>
                    <option value="SEN">Senegal</option>
                    <option value="SRB">Serbia</option>
                    <option value="SCG">Serbia and Montenegro</option>
                    <option value="SYC">Seychelles</option>
                    <option value="SLE">Sierra Leone</option>
                    <option value="SGP">Singapore</option>
                    <option value="SXM">Sint Maarten</option>
                    <option value="SVK">Slovakia</option>
                    <option value="SVN">Slovenia</option>
                    <option value="SLB">Solomon Islands</option>
                    <option value="SOM">Somalia</option>
                    <option value="ZAF">South Africa</option>
                    <option value="SGS">South Georgia and the South Sandwich Islands</option>
                    <option value="SSD">South Sudan</option>
                    <option value="ESP">Spain</option>
                    <option value="LKA">Sri Lanka</option>
                    <option value="SDN">Sudan</option>
                    <option value="SUR">Suriname</option>
                    <option value="SJM">Svalbard and Jan Mayen</option>
                    <option value="SWZ">Swaziland</option>
                    <option value="SWE">Sweden</option>
                    <option value="CHE">Switzerland</option>
                    <option value="SYR">Syrian Arab Republic</option>
                    <option value="TWN">Taiwan, Province of China</option>
                    <option value="TJK">Tajikistan</option>
                    <option value="TZA">Tanzania, United Republic of</option>
                    <option value="THA">Thailand</option>
                    <option value="TLS">Timor-Leste</option>
                    <option value="TGO">Togo</option>
                    <option value="TKL">Tokelau</option>
                    <option value="TON">Tonga</option>
                    <option value="TTO">Trinidad and Tobago</option>
                    <option value="TUN">Tunisia</option>
                    <option value="TUR">Turkey</option>
                    <option value="TKM">Turkmenistan</option>
                    <option value="TCA">Turks and Caicos Islands</option>
                    <option value="TUV">Tuvalu</option>
                    <option value="UGA">Uganda</option>
                    <option value="UKR">Ukraine</option>
                    <option value="ARE">United Arab Emirates</option>
                    <option value="GBR">United Kingdom</option>
                    <option value="USA">United States</option>
                    <option value="UMI">United States Minor Outlying Islands</option>
                    <option value="URY">Uruguay</option>
                    <option value="UZB">Uzbekistan</option>
                    <option value="VUT">Vanuatu</option>
                    <option value="VEN">Venezuela</option>
                    <option value="VNM">Viet Nam</option>
                    <option value="VGB">Virgin Islands, British</option>
                    <option value="VIR">Virgin Islands, U.s.</option>
                    <option value="WLF">Wallis and Futuna</option>
                    <option value="ESH">Western Sahara</option>
                    <option value="YEM">Yemen</option>
                    <option value="ZMB">Zambia</option>
                    <option value="ZWE">Zimbabwe</option>
                  </select>
                  <label className="form-label" for="form3Example3">Country</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.countrycode}</p>

                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={formValues.email} name="email" onChange={handleChange} />
                  <label className="form-label" for="form3Example3">Email</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.email}</p>
                </div>

                {/* Phone Number */}
                <div className="form-outline mb-3">
                  <input type="text" className="form-control form-control-lg"
                    placeholder="Enter mobile number" value={formValues.phonenumber} name="phonenumber" onChange={handleChange} />
                  <label className="form-label" for="form3Example4">Moble Number</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.phonenumber}</p>
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" className="form-control form-control-lg"
                    placeholder="Enter password" value={formValues.password} name="password" onChange={handleChange} />
                  <label className="form-label" for="form3Example4">Password</label>
                  <p style={{ color: "red", fontSize: "13px" }}>{formErrors.password}</p>
                </div>


                <div className="text-center text-lg-start mt-4 pt-2">
                  <input type="submit" className="btn btn-primary btn-lg" style={{ paddingleft: '2.5rem', paddingright: '2.5rem' }} value="Register"></input>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                    className="link-danger">Register</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default UserRegisteration