import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./style.css";

interface DonutChartProps {
  seriesData: number[]; // Série como uma propriedade
  scale: number;
}

export const DonoutChart: React.FC<DonutChartProps> = ({
  seriesData,
  scale,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        customScale: scale,
        donut: {
          labels: {
            show: true,
            name: { show: false },
            value: {
              show: true,
              color: "white",
              offsetY: 7,
              formatter: function (val) {
                return `${val}%`;
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Perda", "Lucro"], // Adicione rótulos para cada série

    colors: ["#E2243B", "#00E074"], // Cores personalizadas para cada série
    stroke: {
      show: false, // Defina como true para mostrar a borda ou false para ocultá-la
    },
  };

  return (
    <div className="donut-chart">
      <ReactApexChart
        sx={{ backgroundColor: "blue" }}
        options={options}
        series={seriesData}
        type="donut"
        width={150}
      />
    </div>
  );
};
