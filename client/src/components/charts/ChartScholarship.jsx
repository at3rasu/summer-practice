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
)

export const ChartScholarship = () => {
    const barChartData = {
        labels: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],
        datasets: [{
            label: 'Студентов',
            data: [300, 300, 400, 545, 100, 535, 213],
            borderColor: "#8A75E3",
            backgroundColor: ["#A696EC", "#8A75E3"],
        },]
    }

    const options = {
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
                    display:false
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
        borderRadius:5,
        barPercentage: 1,
        categoryPercentage: 1
    }

    return(
        <div className={styles.box}>
            <Bar
                type="bar"
                height={310}
                options={options}
                data={barChartData}
                plugins={[ChartDataLabels]}
            />
        </div>
    )
}
