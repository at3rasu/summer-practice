import { Line } from 'react-chartjs-2'
import styles from './ChartRegister.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
}from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
)

export const ChartBudget = () =>{
    const data = {
        labels: ["Сен.", "Окт.", "Ноя.", "Дек.", "Янв.", "Фев."],
        datasets: [{
            data: [ 24, 38, 45, 56, 61, 81, 91], 
            fill: true, // Закрасить область под линией данных
            backgroundColor: 'rgba(245, 45, 48, 0.21)',
            tension: 0.5
        }]
    }
    const options = {
        borderColor: '#F27E80',
        pointBorderColor: '#F27E80',
        pointRadius: 4,
        pointBackgroundColor: '#F27E80',
        responsive: true,
          scales:{
              x:{
                    grid:{
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: true, // Display x-axis labels
                        color: "#000000", // Set font color
                        font: {
                            size: 17, // Change the font size here
                            family: "Giga Sans", 
                        }
                    },
              },
              y:{
                    grid:{
                        display:true,
                        drawBorder: false
                    },
                    ticks:{
                        display:false,
                        stepSize: 25
                    }
                  
              }
          },
          plugins: {
            datalabels: {
                display: true,
                color: "#000000",
                font: {
                    size: 18, // Change the font size here
                    family: "Giga Sans", // Change the font family here
                },
                align: 'end', // Place the labels at the end of the bars
                anchor: 'end', // Position the labels above the bars
            }
        },
    }

    return(
        <div className={styles.box1}>
            <div className={styles.chart}>
                <Line data={data} options={options} height={290} plugins={[ChartDataLabels]}></Line>    
            </div> 
        </div>
    )
}