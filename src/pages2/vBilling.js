/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import {useHistory} from "react-router-dom"

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
import { useEffect, useState } from "react";

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "PRODUCT BARCODE",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "PRODUCT NAME",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "PRODUCT CATEGORY",
    dataIndex: "function",
    key: "Category",
  },
  {
    title: "QUANTITY",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "PRODUCT PRICE",
    dataIndex: "function",
    key: "Category",
  },

  // {
  //   title: "STATUS",
  //   key: "status",
  //   dataIndex: "status",
  // },

];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Alexa Liras</Title>
            <p>alexa@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Programator</Title>
          <p>Developer</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Laure Perrier</Title>
            <p>laure@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Executive</Title>
          <p>Projects</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Miriam Eric</Title>
            <p>miriam@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Marketing</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Richard Gran</Title>
            <p>richard@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/03/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Tester</Title>
          <p>Developer</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];
// project table start
const project = [
  {
    title: "COMPANIES",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Spotify Version</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$14,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Progress Track</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$3,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Jira Platform Errors</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">Not Set</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">done</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Launch new Mobile App</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$20,600</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Web Dev</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$4,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Redesign Online Store</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$2,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },
];

function Tables() {

  const navigate=useHistory()
  const token= useSelector((state) => state.userdata.token)
  const token_obj={
      token:token
  }

  //................................................................Verify User...........................................................................
  useEffect(()=>{

    if(token==null){
      navigate.push("/")
    }

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
  

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [productbarcode, setBarcode] = useState()
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [firstbarcode, setFirstBarcode]=useState()
  const [secondbarcode, setSecondBarcode]=useState()
  const vender_email = useSelector((state) => state.userdata.email)


  const inputs = {
    productbarcode: productbarcode
  }

  const transactionInfo={
    transaction:items,
    userbarcode:firstbarcode+secondbarcode,
    total:total,
    vender_email:vender_email
  }

// Fetching Product Info
  const getProductInfo = async (e) => {
    try {
      e.preventDefault();
      const myInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      }
      const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/producttransaction', myInit)
      // const response = await fetch('http://localhost:3001/api/producttransaction', myInit)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      let data = await response.json()
      setItems([...items, data])
      console.log(data)

      items.map((elem, index) => {
        let totalInt = parseInt(elem.products.pprice)
        console.log(totalInt)
        setTotal(total + totalInt)
      })
      console.log(items)
    } catch (error) {
      console.log(error)
    }
  }

  //Performing Transaction
  const performTransaction = async (e) => {
    try {
      let first_char=firstbarcode.substr(0, 1)
      let second_char=secondbarcode.substr(0, 1)

      if(first_char==="#" && second_char==="=")
      {
        const myInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(transactionInfo)
        }
        const response = await fetch('https://blush-bighorn-sheep-kit.cyclic.app/api/transaction', myInit)
        // const response = await fetch('http://localhost:3001/api/transaction', myInit)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        let data = await response.json()
        if(data.response==="Purchase Successfull")
        {
          window.alert("Purchase Successfull")
        }
      }else if(data.response==="User Doesnot Exist") {
      window.alert("User Doesnot Exist")
      }else{
        window.alert("Invalid User Barcode")
      }

      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs={24} md={24}>
            <Row gutter={[24, 0]}>
              <Col xs={24} className="mb-24">
                <Card className="header-solid h-full ant-card-p-0" title={<>
                  <Row gutter={[24, 0]} className="ant-row-flex ant-row-flex-middle">
                    <Col xs={24} md={12}>
                      <h6 className="font-semibold m-0">PRODUCT BARCODE</h6>
                    </Col>
                    <Col xs={24} md={12} className="d-flex">
                      <Button type="primary" onClick={getProductInfo}>SUBMIT</Button>
                    </Col>
                  </Row>                   </>}>
                  <div class="form-group">
                    {/* <label class=" control-label" for="product_description">PRODUCT DESCRIPTION</label> */}
                    <input type="text" class="form-control" id="product_description" placeholder="Product Barcode" name="product_description" onChange={(e) => { setBarcode(e.target.value) }}></input></div></Card></Col></Row>
            <Row gutter={[24, 0]}>
              <Col xs={24} className="mb-24">
                <Card className="header-solid h-full ant-card-p-0" title={<>
                  <Row gutter={[24, 0]} className="ant-row-flex ant-row-flex-middle">
                    <Col xs={24} md={12}>
                      <h6 className="font-semibold m-0">USER BARCODE</h6>
                    </Col>
                    <Col xs={24} md={12} className="d-flex">
                      <Button type="primary" onClick={performTransaction}>SUBMIT</Button>
                    </Col>
                  </Row>                   </>}>
                  <div class="form-group">
                    {/* <label class=" control-label" for="product_description">PRODUCT DESCRIPTION</label> */}
                    <input type="text" class="form-control" id="product_description" placeholder="First Barcode" name="product_description" onChange={(e) => { setFirstBarcode(e.target.value) }}></input>
                    <input type="text" class="form-control" id="product_description" name="product_description" placeholder="Second Barcode" onChange={(e) => { setSecondBarcode(e.target.value) }}></input>
                  </div>
                    </Card></Col></Row>
                    
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Product Table"
                extra={
                  <>
                    <div onChange={onChange} defaultValue="a" class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" value="a" class="btn leftbutton btn-secondary">Pay</button>
                      <button type="button" value="b" class="btn middlebutton btn-secondary">Clear</button>
                    </div>
                  </>
                }
              >
                <div className="table-responsive">
                  <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Barcode</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        items.map((elem, index) => {
                          return (<tr><td>{elem.products.pbarcode}</td><td>{elem.products.pname}</td><td>{elem.products.pcategory}</td><td>{elem.products.pprice}</td><td>{elem.products.pquantity}</td></tr>)
                        })
                      }
                      <tr><td></td><td></td><td></td><td></td><td>Total={total}</td></tr>
                    </tbody>
                  </table>
                </div>
              </Card>

            </Col>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Tables;
