import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import ExpensesForm from './ExpensesForm';
import ExpensesItem from './ExpensesItem';
import { TbCurrencyNaira } from 'react-icons/tb';

const Expenses = () => {
  const { addExpense, expenses, getExpenses, deleteExpenses, totalExpenses } =
    useGlobalContext();
  React.useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className=" ">
      <main className=" py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Expenses</h2>
        <h2 className=" bg-[#FCF6F9] flex justify-center items-center border-2px border-white shadow-lg rounded-[20px] p-4 mx-4 my-0 text-2xl gap-2 text-black mb-3 ">
          Total Expenses:
          <span className=" flex flex-row items-center text-red-700 font-bold">
            -<TbCurrencyNaira size={30} />
            {totalExpenses()}
          </span>
        </h2>
        <div className=" ">
          <div className="form-container">
            <ExpensesForm />
          </div>
          <div className="income">
            {expenses.map((expenses) => {
              const { _id, title, amount, date, category, description, type } =
                expenses;
              return (
                <ExpensesItem
                  key={_id}
                  id={_id}
                  type={type}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteItem={deleteExpenses}
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
