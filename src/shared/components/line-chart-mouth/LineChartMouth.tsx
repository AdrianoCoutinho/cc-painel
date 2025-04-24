import React from "react";
import ReactApexChart from "react-apexcharts";
import "./style.css";

export const LineChartMouth: React.FC = () => {
  const options = {
    chart: {
      foreColor: "#ffffff",
    },
    xaxis: {
      labels: {
        hideOverlappingLabels: false,
        rotate: -45,
        rotateAlways: true,
      },
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    colors: ["#00e074", "#E2243B"],
    grid: {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    markers: {
      size: 4,
      colors: ["#00e074", "#E2243B"],
      strokeWidth: 0,
    },
    stroke: {
      width: 2,
      colors: ["#00e074", "#E2243B"],
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
      name: "Entradas",
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000],
    },
    {
      name: "Saídas",
      data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 1000],
    },
  ];

  return (
    <div className="line-chart-mouth">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={212}
      />
    </div>
  );
};
