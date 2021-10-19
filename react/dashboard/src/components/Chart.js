import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css'; 





const options = { 
  plugins: {
    legend: {
        font: {
        size: 22,
        family: 'tahoma',
        weight: 'normal',
        style: 'italic'
      },

    }
  },
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
        <Bar className="graph" data={props.data} options={options} />

    </div>
    </div>
  </>
);

export default VerticalBar;