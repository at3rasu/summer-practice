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

export const ChartRegister = () => {
  const barChartData = {
    labels: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    datasets: [
      {
        data: [300, 300, 400, 545, 100, 535, 213, 321, 545, 645, 133, 313],
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
      width={230}
      height={70}
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
        borderRadius:8
      }}
      data={barChartData}
    />
    </div>
  );
  return barChart;
};
