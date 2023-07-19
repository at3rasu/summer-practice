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
        backgroundColor: "#F27E80",
        fill: true
      },
    ]
  };

  const barChart = (
    <div className={styles.box}>
    <Bar
      type="bar"
      width={90}
      height={40}
      options={{
        responsive: true,
        scales:{
            x:{
                grid:{
                    display: false,
                    drawBorder: false
                }
            },
            y:{
                grid:{
                    display:false,
                    drawBorder: false
                },
                ticks:{
                    display:false
                }
            }
        },
        borderRadius:5,
        indexAxis: 'y',
        plugins: {
            datalabels: {
                display: true,
                color: "#FFFFFF",
            }
        }
      }}
      data={barChartData}
    />
    </div>
  );
  return barChart;
};
