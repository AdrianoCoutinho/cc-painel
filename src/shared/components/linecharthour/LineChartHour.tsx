import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { recipeOfTheDay } from "../../../api";
import "./style.css";

export const LineChartHour: React.FC = () => {
  const [datatRecipeOfTheDay, setDatatRecipeOfTheDay] = useState([]);

  const getRecipeOfTheDay = async () => {
    const result = await recipeOfTheDay();
    setDatatRecipeOfTheDay(result.resultado);
    return result;
  };

  useEffect(() => {
    getRecipeOfTheDay();
  }, []);

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
      data: datatRecipeOfTheDay,
    },
  ];

  return (
    <div className="line-chart-hour">
      <ReactApexChart
        className="line-chart-hour-inner"
        options={options}
        series={series}
        type="line"
        height={240}
      />
    </div>
  );
};
