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
    const ctx = chart.ctx
    const width = chart.width
    const height = chart.height

    ctx.restore()
    const fontSize1 = 25
    const fontSize2 = 60
    const fontWeight = '600'
    ctx.font = `${fontWeight} ${fontSize1}px Inter`
    ctx.fillStyle = 'black'
    ctx.textBaseline = 'middle'

    const text1 = 'Всего студентов:'
    const textX1 = Math.round((width - ctx.measureText(text1).width) / 2)
    const textY1 = height / 2 - fontSize1

    ctx.fillText(text1, textX1, textY1)

    ctx.font = `${fontSize2}px Giga Sans`
    const text2 = '3118'
    const textX2 = Math.round((width - ctx.measureText(text2).width) / 2)
    const textY2 = height / 2 + fontSize2 / 2

    ctx.fillText(text2, textX2, textY2)

    ctx.save()
  },
}


export const ChartCity = () =>{
    const colors = ['#E05153', '#8876D2', '#82EA9F', '#F277BA', '#F0B256'];
    const [chartCity] = useState({
        labels: ['Екатеринбург', 'Курган', 'Нижний Тагил', 'Верхняя пышма', 'Другие'],
        datasets: [
          {
            label: 'Студентов',
            data: [48, 15, 28, 23, 10],
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
      const totalStudents = chartCity.datasets[0].data.reduce((sum, value) => sum + value, 0);
      return chartCity.labels.map((city, index) => {
        const percentage = ((chartCity.datasets[0].data[index] / totalStudents) * 100).toFixed(1);
        return (
          <li key={index} className={styles.cityItem}>
            {city}
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarBackground}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: options.backgroundColor[index],
                  }}
                ></div>
              </div>
            </div>
            <span className={styles.percentage}>{`${percentage}%`}</span>
          </li>
        );
      });
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