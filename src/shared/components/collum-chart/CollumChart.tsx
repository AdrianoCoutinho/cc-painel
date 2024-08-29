import React from "react";
import ReactApexChart from "react-apexcharts";

export const CollumChart: React.FC = () => {
  // Dados do gráfico
  const series = [
    {
      name: "Série 1",
      data: [44, 55, 41, 64, 22, 43, 70],
    },
  ];

  // Configurações do gráfico
  const options = {
    chart: {
      foreColor: "#ffffff",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h"],
    },
    colors: ["#00E074"],
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
    plotOptions: {
      bar: {
        borderRadius: 5, // valor que define a curvatura das bordas das colunas
      },
    },
  };

  return (
    <div className="line-chart-visit" style={{ position: "relative" }}>
      <style>
        {`
          .line-chart-visit {
            width: 78%;
          }
        `}
      </style>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={"100%"}
      />
    </div>
  );
};
