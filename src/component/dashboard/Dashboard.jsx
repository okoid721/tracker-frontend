import React from 'react';
import Chart from '../chart/Chart';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useGlobalContext } from '../../context/globalContext';

const Dashboard = () => {
  const { totalIncome, totalExpenses, totalSavings, totalBalance } =
    useGlobalContext();
  return (
    <div className="Dashboard ">
      <main className=" py-8 px-6 w-full">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white pt-24">
          Welcome to the Dashboard
        </h1>
        <div className="sata-con">
          <div className="chart-con">
            <Chart />
            <div className="amount">
              <div className="income">
                <h2>Total Income</h2>
                <p className=" flex flex-row">
                  {' '}
                  <TbCurrencyNaira /> {totalIncome()}{' '}
                </p>
              </div>
              <div className="expenses">
                <h2>Total Income</h2>
                <p className=" flex flex-row">
                  {' '}
                  <TbCurrencyNaira /> {totalExpenses()}{' '}
                </p>
              </div>
              <div className="savings">
                <h2>Total Saving</h2>
                <p className=" flex flex-row">
                  {' '}
                  <TbCurrencyNaira /> {totalSavings()}{' '}
                </p>
              </div>
              <div className="balance">
                <h2>ToTal</h2>
                <p className=" flex flex-row">
                  <TbCurrencyNaira /> {totalBalance()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
