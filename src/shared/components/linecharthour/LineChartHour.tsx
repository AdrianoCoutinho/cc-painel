import React from "react";
import ReactApexChart from "react-apexcharts";
import "./style.css";

export const LineChartHour: React.FC = () => {
  const options = {
    chart: {
      foreColor: "#ffffff",
    },
    xaxis: {
      categories: [
        "00h",
        "01h",
        "02h",
        "03h",
        "04h",
        "05h",
        "06h",
        "07h",
        "08h",
        "09h",
        "10h",
        "11h",
        "12h",
        "13h",
        "14h",
        "15h",
        "16h",
        "17h",
        "18h",
        "19h",
        "20h",
        "21h",
        "22h",
        "23h",
      ],
    },
    colors: ["#fff"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    markers: {
      size: 3,
      colors: ["#f5f1f129"],
      strokeColors: "#747474",
      strokeWidth: 2,
    },
    stroke: {
      width: 1,
    },
    theme: {
      mode: "dark" as const,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "Receita",
      data: [
        100, 200, 300, 400, 500, 600, 400, 200, 100, 50, 200, 3000, 100, -200,
        -500, 0, 2000, 33, 0, -500, 0, 2000, 33, 22000,
      ],
    },
  ];

  return (
    <div className="line-chart-hour">
      <ReactApexChart
        className="line-chart-hour-inner"
        options={options}
        series={series}
        type="line"
        height={200}
      />
    </div>
  );
};
