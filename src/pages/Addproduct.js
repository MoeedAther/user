import {
    Row,
    Col,
    Card,
    Button,
} from "antd";
import { useSelector } from "react-redux";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

function Addproduct() {

    const token= useSelector((state) => state.userdata.token)
    const token_obj={
        token:token
    }

    const navigate=useHistory()

    //................................................................Verify User...........................................................................
    useEffect(()=>{
        const verify_user=async()=>{

                try {
                  const myInit = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(token_obj)
                  }
                  const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/token', myInit)
                //   const response = await fetch('http://localhost:3001/api/token', myInit)
                  if (!response.ok) {
                    throw Error(response.statusText)
                  }
                  const data = await response.json()
                  if(data.message==="Verify Successful")
                  {
                    navigate.push('/profile')
                  }
                 
                } catch (error) {
                  console.log(error)
                }
              }
        verify_user()
    },[])
    //......................................................................................................................................................

    const [productbarcode, setProductBarcode]=useState();
    const [productname, setProductName]=useState();
    const [productcategory, setProductCategory]=useState();
    const [unitprice, setUnitPrice]=useState();
    const [productquantity, setProductQuantity]=useState();
    const [productdescription, setProductDescription]=useState();

    const inputs={
        productbarcode:productbarcode,
        productname:productname,
        productcategory:productcategory,
        unitprice:unitprice,
        productquantity:productquantity,
        productdescription:productdescription
    }

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            const myInit = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
              }
        
            //   const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/addproducts', myInit)
              const response = await fetch('http://localhost:3001/api/addproducts', myInit)
              if (!response.ok) {
                throw Error(response.statusText)
              }
              console.log(response)
              const data = await response.json()
              console.log(data)
              window.alert("Product Added Successfully")
        
        } catch (error) {
           console.log(error) 
        }        
    }


    return (
        <>

            <Card className="header-solid h-full ant-card-p-0">
                <div className="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label class="control-label" for="product_id">PRODUCT BARCODE</label>
                            <input id="product_id" name="product_id" placeholder="PRODUCT BARCODE" class="form-control input-md" required="" type="text" onChange={(e)=>{setProductBarcode(e.target.value)}} />
                        </div>
                    </div>



                    <div class="col-4">
                        <div class="form-group">
                            <label class="control-label" for="product_name">PRODUCT NAME</label>

                            <input id="product_name" name="product_name" placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text" onChange={(e)=>{setProductName(e.target.value)}}/>


                        </div>

                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label class="control-label" for="product_categorie">PRODUCT CATEGORY</label>

                            <select id="product_categorie" name="product_categorie" class="form-control" onChange={(e)=>{setProductCategory(e.target.value)}}>
                                <option value="">Select Category</option>
                                <option value="Soft drinks">Soft Drinks</option>
                                <option value="Biscuits">Buscuits</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Juices">Juices</option>
                            </select>

                        </div>

                    </div>
                    <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class=" control-label" for="available_quantity">ADD QUANTITY</label>
                            <input id="available_quantity" name="available_quantity" placeholder="ADD QUANTITY" class="form-control input-md" required="" type="text" onChange={(e)=>{setProductQuantity(e.target.value)}}/>
                        </div>

                    </div>
                    <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class=" control-label" for="available_quantity">UNIT PRICE</label>
                            <input id="available_quantity" name="available_quantity" placeholder="UNIT PRICE" class="form-control input-md" required="" type="text" onChange={(e)=>{setUnitPrice(e.target.value)}}/>

                        </div>

                    </div>
                    {/* <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class=" control-label" for="product_weight">PRODUCT WEIGHT</label>

                            <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" class="form-control input-md" required="" type="text" />



                        </div>

                    </div> */}
                    <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class=" control-label" for="product_description">PRODUCT DESCRIPTION</label>
                            <textarea class="form-control" id="product_description" name="product_description" onChange={(e)=>{setProductDescription(e.target.value)}}></textarea>
                        </div>


                    </div>
                    {/* <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class="control-label" for="percentage_discount">PERCENTAGE DISCOUNT</label>

                            <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" class="form-control input-md" required="" type="text" />
                        </div>


                    </div> */}
                   
                
                    {/* <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class="control-label" for="filebutton">MAIN_IMAGE</label>
                            <input id="filebutton" name="filebutton" class="input-file" type="file" />

                        </div>


                    </div> */}
                    {/* <div class="col-4 mt-3">
                        <div class="form-group">
                            <label class="control-label" for="filebutton">AUXILIARY_IMAGES</label>
                            <input id="filebutton" name="filebutton" class="input-file" type="file" />

                        </div>


                    </div> */}
                  
                    <div class="col-4 mt-5">
                        <div class="form-group">
                            {/* <label class="control-label" for="singlebutton">SINGLE BUTTON</label><br /> */}
                            <button id="singlebutton" name="singlebutton" class="btn btn-primary" onClick={handleSubmit}>Submit</button>

                        </div>


                    </div>

                </div>
            </Card>

        </>
    );
}

export default Addproduct;
