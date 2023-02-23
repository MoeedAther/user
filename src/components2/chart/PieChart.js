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

import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import Chart from "react-apexcharts"

import { useState, useEffect } from "react";

function PieChart(props) {
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
                    <b><Title level={5}>Money spent on each category per month <span className="bnb2">{month}</span></Title></b>
                    <Paragraph className="lastweek">
                        {/* than last month <span className="bnb2">+30%</span> */}
                    </Paragraph>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Month
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="Pie1vhome">
            <Chart
                type="pie"
                width={400}
                height={550}
                series={props.categories}

                options={
                    {
                        labels: ['Buscuits', 'Snacks', 'Soft Drinks', 'Juices']
                    }
                }
            />
            </div>
        </>
    );
}

export default PieChart;