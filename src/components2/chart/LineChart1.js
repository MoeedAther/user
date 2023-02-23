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

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import {useState, useEffect} from "react"

function LineChart1(props) {
  const { Title, Paragraph } = Typography;
  const [year, setYear]=useState()

  useEffect(()=>{

    const currentDate = new Date();
    setYear(currentDate.getFullYear())

  },[])
  


  return (
    <>
      <div className="linechart">
        <div>
          <b><Title level={5}>Money spent in year <span className="bnb2">{year}</span> </Title></b>
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
            name:"Yearly Spendings",
            data: props.yearlyspendings
          }
        ]}

        options={{
          // title:{ text:"Product sold in 2023"},
          xaxis:{
            // title:{text:"Money Spent in Months"},
            categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        }}
      />
    </>
  );
}

export default LineChart1
