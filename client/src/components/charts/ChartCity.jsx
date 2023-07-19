import styles from './ChartCity.module.css'
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    // Legend
}from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip)

export const ChartCity = () =>{
    const colors = ['#E05153', '#8876D2', '#82EA9F', '#F277BA', '#F0B256'];
    const [chartCity] = useState({
        labels: ['Екатеринбург', 'Курган', 'Нижний Тагил', 'Верхняя пышма', 'Другие'],
        datasets: [
          {
            label: 'Студентов',
            data: [48, 15, 28, 4, 23],
          }
        ]
      })

    const options = {
        // legend: {
        //     display: true,
        //     position: "left"
        // },
        backgroundColor: colors,
        borderColor: 'white',
        pointBorderColor: 'red',
        pointRadius: 5,
        borderRadius:4,
        cutoutPercentage: 90,
        plugins: {
            datalabels: {
                display: false,
                color: "Black",
            }
        }
    }
    const renderCityList = () => {
        return chartCity.labels.map((city, index) => (
          <li key={index} className={styles.cityItem}>
            <span
              className={styles.cityColor}
              style={{ backgroundColor: options.backgroundColor[index] }}
            ></span>
            {city}
          </li>
        ));
      };

    return(
        <div className={styles.box}>
            <h1>Статистика студентов по городам</h1>
            <div className={styles.chart}>
                <Doughnut  data={chartCity} options={options} plugins={[ChartDataLabels]}></Doughnut>
                <ul className={styles.cityList}>{renderCityList()}</ul>
            </div> 
        </div>
    )
}