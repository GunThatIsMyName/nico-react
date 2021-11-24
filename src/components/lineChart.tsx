import ApexCharts from "react-apexcharts";
import { chartProps } from "../interface/coinFace";

const LineChart = ({ data }:chartProps) => {
  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: "Hello",
          data: [1,2,3,4,5]
        },
      ]}
      options={{
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Product Trends by Month",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      }}
    ></ApexCharts>
  );
};

export default LineChart;
