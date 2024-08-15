
"use client"
import LineChart from "./Component/LineChart";
import { ChartData, ChartOptions } from 'chart.js';
import PieChart from "./Component/PieChart";
import BranchSalesChart from "./Component/BranchSalesChart";
import { useEffect, useState } from "react";

const chartData: ChartData<'line', number[], string> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales Data',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Data Overview',
    },
  },
};


const pieData: ChartData<'pie'> = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Dataset 1',
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
      borderWidth: 1,
    },
  ],
};

const pieOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Data Overview',
    },
  },
};


const barptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
      legend: {
          position: 'top',
      },
      title: {
          display: true,
          text: 'Branch Sales Overview',
      },
  },
  scales: {
      x: {
          stacked: true, // Stacks the bars on the x-axis
      },
      y: {
          stacked: true, // Stacks the bars on the y-axis
      },
  },
};

export default function Home() {


const [barchartData, setBarChartData] = useState<ChartData<'bar'>>({
  labels: [],
  datasets: []
});

useEffect(() => {
  // Example data for 100 branches
  const branches = Array.from({ length: 100 }, (_, i) => `Branch ${i + 1}`);
  const pendingCashSales = branches.map(() => Math.floor(Math.random() * 1000)); // Random data for demonstration
  const pendingCreditSales = branches.map(() => Math.floor(Math.random() * 1000));

  setBarChartData({
      labels: branches,
      datasets: [
          {
              label: 'Pending Cash Sales',
              data: pendingCashSales,
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
          },
          {
              label: 'Pending Credit Sales',
              data: pendingCreditSales,
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
          },
      ],
  });
}, []);

  return (
    <main className="flex min-h-screen gri flex-col items-center justify-between p-24 max-w-full"  >
   <h1 className="flex items-center text-5xl font-extrabold dark:text-white">Code With<span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">FEDI</span></h1>
    <div className=" grid grid-cols-2 gap-4 w-full mt-20">
    <div>
    <h1>Sales Data</h1>
    <LineChart data={chartData} options={chartOptions} />
    </div>
    <div>
    <h1>Sales Data</h1>
    <PieChart data={pieData} options={pieOptions} />
    </div>


   </div>
   <div className="grid w-full">
    <h1>Sales Data</h1>
     <BranchSalesChart data={barchartData} options={barptions} />    
     </div>
    </main>
  );
}
