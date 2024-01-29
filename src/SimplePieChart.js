import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const SimplePieChart = () => {
  useEffect(() => {
    console.log('SimplePieChart component mounted');
    return () => {
      console.log('SimplePieChart component unmounted');
    };
  }, []);

  // Sample data for the pie chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} />
    </div>
  );
};

export default SimplePieChart;
