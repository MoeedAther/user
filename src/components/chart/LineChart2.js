import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import {useState, useEffect} from "react"

function LineChart2(props) {
  const { Title, Paragraph } = Typography;
  const [year, setYear]=useState()
  const [month, setMonth]=useState()

  useEffect(()=>{

    const currentDate = new Date();
    setYear(currentDate.getFullYear())
    if(currentDate.getMonth() + 1==1)
    {
      setMonth("Janruary")
    }else if(currentDate.getMonth() + 1==2){
      setMonth("February")
    }else if(currentDate.getMonth() + 1==3){
      setMonth("March")
    }else if(currentDate.getMonth() + 1==4){
      setMonth("April")
    }else if(currentDate.getMonth() + 1==5){
      setMonth("May")
    }else if(currentDate.getMonth() + 1==6){
      setMonth("June")
    }else if(currentDate.getMonth() + 1==7){
      setMonth("July")
    }else if(currentDate.getMonth() + 1==8){
      setMonth("August")
    }else if(currentDate.getMonth() + 1==9){
      setMonth("September")
    }else if(currentDate.getMonth() + 1==10){
      setMonth("October")
    }else if(currentDate.getMonth() + 1==11){
      setMonth("November")
    }else if(currentDate.getMonth() + 1==12){
      setMonth("December")
    }

  },[])
  


  return (
    <>
      <div className="linechart">
        <div>
          <b><Title level={5}>Money topped this month <span className="bnb2">{month}</span> </Title></b>
          <Paragraph className="lastweek">
            {/* Products sold in year <span className="bnb2">{year}</span> */}
          </Paragraph>
        </div>
        <div className="sales">
          {/* <ul>
            <li>{<MinusOutlined />} This Year</li>
            <li>{<MinusOutlined />} This Month</li>
          </ul> */}
        </div>
      </div>

      {/* <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      /> */}

      <ReactApexChart
        className="full-width"
        type="area"
        height={350}
        width={"100%"}
        series={[ 
          {
            name:"Biscuits",
            data: props.yearlydeposits
          }
        ]}

        options={{
          // title:{ text:"Product sold in 2023"},
          xaxis:{
            title:{text:"Monthly Deposits"},
            categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        }}
      />
    </>
  );
}

export default LineChart2