// components/BranchSalesChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BranchSalesChartProps {
    data: ChartData<'bar'>;
    options: ChartOptions<'bar'>;
}

const BranchSalesChart: React.FC<BranchSalesChartProps> = ({ data, options }) => {
    return <Bar data={data} options={options} />;
};

export default BranchSalesChart;
