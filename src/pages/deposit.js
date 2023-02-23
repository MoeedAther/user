import {
    Row,
    Col,
    Card,
    Button,
} from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

function Deposit() {
    const navigate=useHistory()
    
    const token= useSelector((state) => state.userdata.token)
    const token_obj={
        token:token
    }
  
    //................................................................Verify User...........................................................................
    useEffect(()=>{
        const verify_user=async()=>{
            if(token==null){
                navigate.push("/")
              }
                try {
                  const myInit = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(token_obj)
                  }
                  const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/token', myInit)
                  // const response = await fetch('http://localhost:3001/api/token', myInit)
                  if (!response.ok) {
                    throw Error(response.statusText)
                  }
                  const data = await response.json()
                  console.log(data)
                  if(data.message==="Verification Unsuccessful")
                  {
                    navigate.push('/')
                  }
                 
                } catch (error) {
                  console.log(error)
                }
              }
        verify_user()
    },[])
    

    const user_email = useSelector((state) => state.userdata.email)

    const [deposit, setDeposit]=useState()
    const depositObj={
        email:user_email,
        deposit:deposit
}

    const handleDeposit=async()=>{ 
        try{ 
        const myInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(depositObj)
        }
        const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/deposit', myInit)
        // const response = await fetch('http://localhost:3001/api/deposit', myInit)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const data = await response.json()
        if(data.response==="Deposit Successfull")
        {
            window.alert("Depost Successfull")
        }
      } 
      catch (error) {
        console.log(error)
      }
    }

    return (
        <>
            <Card className="header-solid h-full ant-card-p-0">
            <div class="col-0 mb-4 d-flex justify-content-end">
                        {/* <div class="form-group"> */}
                            {/* <label class="control-label" for="singlebutton">SINGLE BUTTON</label><br /> */}
                            <button id="singlebutton" name="singlebutton" class="btn btn-primary" onClick={handleDeposit}>Proceed</button>
            </div>
            
            <div className="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label class="control-label" for="product_id">PAYMENT METHOD</label>
                            <select id="product_id" name="product_id" placeholder="PRODUCT BARCODE" class="form-control input-md" required="" onChange={(e)=>{}}>
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="form-group">
                            <label class="control-label" for="product_name">CARD NUMBER</label>

                            <input id="product_name" name="product_name" placeholder="Card Number" class="form-control input-md" required="" type="text" onChange={(e)=>{}}/>


                        </div>

                    </div>

                    <div class="col-4">
                        <div class="form-group">
                            <div>
                            <label class=" control-label" for="available_quantity">CVV</label>
                            <input id="available_quantity" name="available_quantity" placeholder="CVV" class="form-control input-md" required="" type="text" onChange={(e)=>{}}/>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 mt-3">
                        <div class="form-group">
                            <div>
                            <label class=" control-label" for="available_quantity">AMOUNT</label>
                            <input id="available_quantity" name="available_quantity" placeholder="Amount" class="form-control input-md" required="" type="text" onChange={(e)=>{setDeposit(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

        </>
    );
}

export default Deposit;
