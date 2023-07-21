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

const centerTextPlugin = {
  beforeDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    ctx.restore();
    const fontSize1 = 25;
    const fontSize2 = 60;
    const fontWeight = '600'; // Здесь устанавливаем толщину шрифта
    ctx.font = `${fontWeight} ${fontSize1}px Inter`;
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'middle';

    const text1 = 'Всего студентов:'; // Замените это на первый текст
    const textX1 = Math.round((width - ctx.measureText(text1).width) / 2);
    const textY1 = height / 2 - fontSize1;

    ctx.fillText(text1, textX1, textY1);

    ctx.font = `${fontSize2}px Arial`;
    const text2 = '3118'; // Замените это на второй текст
    const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
    const textY2 = height / 2 + fontSize2 / 2;

    ctx.fillText(text2, textX2, textY2);

    ctx.save();
  },
};


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
        cutout: '70%',
        plugins: {
            datalabels: {
                display: false,
                color: "Black",
            },            
        },
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
            <div className={styles.chart}>
                <div className={styles.city}>
                  <Doughnut  data={chartCity} options={options} plugins={[ChartDataLabels, centerTextPlugin]}></Doughnut>
                </div>
                <ul className={styles.cityList}>{renderCityList()}</ul>
            </div> 
        </div>
    )
}