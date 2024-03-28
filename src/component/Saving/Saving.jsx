import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import SavingForm from './SavingForm';
import IncomeItems from '../Expenses/ExpensesItem';
import { TbCurrencyNaira } from 'react-icons/tb';

const Expenses = () => {
  const { addSavings, getSavings, deleteSavings, savings, totalSavings } =
    useGlobalContext();
  React.useEffect(() => {
    getSavings();
  }, []);

  return (
    <div className=" ">
      <main className=" py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Savings</h2>
        <h2 className=" bg-[#FCF6F9] flex justify-center items-center border-2px border-white shadow-lg rounded-[20px] p-4 mx-4 my-0 text-2xl gap-2 text-black mb-3 ">
          Total Expenses:
          <span className=" flex flex-row items-center text-blue-700 font-bold">
            <TbCurrencyNaira size={30} />
            {totalSavings()}
          </span>
        </h2>
        <div className=" ">
          <div className="form-container">
            <SavingForm />
          </div>
          <div className="income">
            {savings.map((savings) => {
              const { _id, title, amount, date, category, description } =
                savings;
              return (
                <IncomeItems
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteItem={deleteSavings}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Expenses;
