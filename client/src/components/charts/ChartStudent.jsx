import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './ChartRegister.module.css'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  );

export const ChartStudent = () => {
    const barChartData = {
    labels: [ "Программная инженения", "Оптотехника", "Журналистика", "Медицина", "Биохимия"],
    datasets: [
        {
        label: 'Студентов',
        data: [798, 725, 615, 421, 365],
        borderColor: "#F27E80",
        backgroundColor: ["#F27E80", "#E05B5B"]
        },
    ]
    };
    const options = {
        responsive: true,
        scales:{
            x:{
                ticks: {
                    stepSize: 200
                }
            },
            y:{
                grid:{
                    display:false,
                    drawBorder: false
                },
                ticks:{
                    display:false,
                    
                }
            }
        },
        borderRadius:5,
        indexAxis: 'y',
        plugins: {
            datalabels: {
                display: true,
                color: "#FFFFFF",
                font: {
                    size: 18, // Change the font size here
                    family: "Giga Sans", // Change the font family here
                },
                formatter: (value, context) => {
                  // Display the label from the y-axis (labels array)
                  return barChartData.labels[context.dataIndex];
                }
            }
        },
        categoryPercentage: 1
    }

  const barChart = (
    <div className={styles.boxStudent}>
    <Bar
      type="bar"
      width={90}
      height={70}
      options={options}
      data={barChartData}
      plugins={[ChartDataLabels]}
    />
    </div>
  );
  return barChart;
};
