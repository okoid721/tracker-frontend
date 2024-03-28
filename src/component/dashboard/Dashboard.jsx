import React, { useEffect } from 'react';
import Chart from '../chart/Chart';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../history/History';

const Dashboard = () => {
  const {
    totalIncome,
    totalExpenses,
    totalSavings,
    totalBalance,
    getIncome,
    getExpenses,
    getSavings,
  } = useGlobalContext();

  useEffect(() => {
    getIncome();
    getExpenses();
    getSavings();
  }, []);
  return (
    <div className="Dashboard ">
      <main className=" py-8 px-6 w-full">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white pt-24">
          Welcome to the Dashboard
        </h1>
        <div className="sata-con">
          <div className="chart-con">
            <Chart />
            <div className=" flex items-center justify-center mt-4">
              <div className=" grid lg:grid-cols-2 grid-cols-1  gap-x-32 gap-5 text-center ">
                <div className=" bg-white p-8 rounded-[20px] shadow-lg text-center">
                  <h2 className=" font-bold text-3xl ">Total Income</h2>
                  <p className=" flex flex-row text-black items-center ">
                    {' '}
                    <TbCurrencyNaira size={30} /> {totalIncome()}{' '}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[20px] shadow-lg text-center">
                  <h2 className=" font-bold text-3xl ">Total Income</h2>
                  <p className=" flex flex-row text-black items-center">
                    {' '}
                    <TbCurrencyNaira size={30} /> {totalExpenses()}{' '}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[20px] shadow-lg text-center">
                  <h2 className=" font-bold text-3xl ">Total Saving</h2>
                  <p className=" flex flex-row text-black items-center">
                    {' '}
                    <TbCurrencyNaira size={30} /> {totalSavings()}{' '}
                  </p>
                </div>
                <div className=" bg-white p-8 rounded-[20px] shadow-lg text-center">
                  <h2 className=" font-bold text-3xl ">Total Balance</h2>
                  <p className=" flex flex-row text-black items-center ">
                    <TbCurrencyNaira size={30} /> {totalBalance()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
