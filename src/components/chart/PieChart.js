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
// import lineChart from "./configs/lineChart";
import Chart from "react-apexcharts"

function PieChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Money spent on each category per month</Title>
          <Paragraph className="lastweek">
            than last month <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} This Year</li>
            <li>{<MinusOutlined />} This Month</li>
          </ul>
        </div>
      </div>

      <Chart
                type="pie"
                width={500}
                height={550}
                series={[23,43,50,54]}

                options={
                    {
                        labels:['Soft Drinks', 'Buscuits', 'Snacks', 'Juices']
                    }
                }
            />
      
    </>
  );
}

export default PieChart;
