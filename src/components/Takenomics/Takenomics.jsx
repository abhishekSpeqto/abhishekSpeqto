import React from 'react'
import './Takenomics.css'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Takenomics = () => {

    const data = {
        labels: ["Category A", "Category B", "Category C", "Category D"],
        datasets: [
            {
                label: "",
                data: [400, 300, 500, 200],
                backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
                hoverBackgroundColor: ["#0077CC", "#009977", "#E6A800", "#E66A00"],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%",
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                let total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
                let value = tooltipItem.raw;
                let percentage = ((value / total) * 100).toFixed(2) + "%";
                return `${tooltipItem.label}: ${percentage}`;
              },
            },
          },
          datalabels: {
            color: "#fff",
            font: { weight: "bold" },
            formatter: (value, context) => {
              let total = context.dataset.data.reduce((a, b) => a + b, 0);
              let percentage = ((value / total) * 100).toFixed(1);
              return percentage + "%"; 
            },
          },
        },
      };

    return (
        <div className='takenomics-con'>
            <h2 className='take-heading'>Takenomics</h2>
            <div style={{ width: "300px", height: "300px" }}>
                <Doughnut data={data} options={options}  />
            </div>
        </div>
    )
}
