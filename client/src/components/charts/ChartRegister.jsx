import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const ChartRegister = () => {
  const barChartData = {
    labels: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    datasets: [
      {
        data: [300, 300, 400, 545, 100, 535, 213, 321, 545, 645, 133, 313],
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        responsive: true
      }}
      data={barChartData}
    />
  );
  return barChart;
};
