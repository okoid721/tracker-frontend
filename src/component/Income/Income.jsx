import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../from/Form';
import IncomeItems from '../incomeItem/IncomeItems';
import { TbCurrencyNaira } from 'react-icons/tb';

const Income = () => {
  const { addIncome, incomes, getIncome, deleteIncome, totalIncome } =
    useGlobalContext();
  React.useEffect(() => {
    getIncome();
  }, []);

  return (
    <div className=" ">
      <main className=" py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Income</h2>
        <h2 className=" bg-[#FCF6F9] flex justify-center items-center border-2px border-white shadow-lg rounded-[20px] p-4 mx-4 my-0 text-2xl gap-2 text-black mb-3 ">
          Total Income:
          <span className=" flex flex-row items-center text-green-700 font-bold">
            <TbCurrencyNaira size={30} />
            {totalIncome()}
          </span>
        </h2>
        <div className=" ">
          <div className="form-container">
            <Form />
          </div>
          <div className="income">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income;
              return (
                <IncomeItems
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Income;
