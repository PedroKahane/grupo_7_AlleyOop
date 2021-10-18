import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css'; 


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Ventas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0.5,
    },
  ],
};

const options = { 
    
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = (props) => (
  <>
  <div className="Bar">
    <div className='header'>
      <h1 className='title_graph'>Cantidad de Ventas por Producto</h1>
      <div className='links'>
      </div>
    </div>
    <div className="bar_content">
        <Bar className="graph" data={data} options={options} />

    </div>
    </div>
  </>
);

export default VerticalBar;