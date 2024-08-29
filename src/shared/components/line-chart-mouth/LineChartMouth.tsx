import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  getDepositsValuesOfMouth,
  getExitstsValuesOfMouth,
} from "../../../api";
import "./style.css";

export const LineChartMouth: React.FC = () => {
  const [entries, setEntries] = useState<number[]>([]);
  const [exits, seExits] = useState<number[]>([]);
  const options = {
    chart: {
      foreColor: "#ffffff",
    },
    xaxis: {
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
      data: entries,
    },
    {
      name: "Saídas",
      data: exits,
    },
  ];

  const getArrayMouth = async () => {
    const resultDeposits = await getDepositsValuesOfMouth();
    const resultExits = await getExitstsValuesOfMouth();
    setEntries(resultDeposits);
    seExits(resultExits);
  };

  useEffect(() => {
    getArrayMouth();
  }, []);

  return (
    <div className="line-chart-mouth">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={225}
      />
    </div>
  );
};
