import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import dateFormat from '../../utils/dateFormat';
import {
  Chart as ChartJs,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LinearScale,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LinearScale
);

const Chart = () => {
  const { incomes, expenses, savings } = useGlobalContext();
  const data = {
    labels: incomes.map((i) => {
      const { date } = i;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Income',
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: 'green',
      },
      {
        label: 'Expenses',
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: 'red',
      },
      {
        label: 'Savings',
        data: [
          ...savings.map((saving) => {
            const { amount } = saving;
            return amount;
          }),
        ],
        backgroundColor: 'blue',
      },
    ],
  };
  return (
    <div className=" bg-[#FCF6F9] border-[2px] border-white shadow-lg p-4 rounded-[20px] h-[100%]  ">
      <Line data={data} />
    </div>
  );
};

export default Chart;
