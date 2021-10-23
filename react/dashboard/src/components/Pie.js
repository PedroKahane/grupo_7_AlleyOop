import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = (props) => (
  <>
  <div className="Bar">
    <div className='header'>
      <h1 className='title_graph'>Productos de cada color</h1>
      <div className='links'>
      </div>
    </div>
    <div className="bar_content">
    <Pie className="graph_pie" data={props.data} />
    </div>
    </div>
  </>
);

export default PieChart;