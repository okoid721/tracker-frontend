import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../from/Form';

const Income = () => {
  const { addIncome, incomes, getIncome } = useGlobalContext();
  React.useEffect(() => {
    getIncome();
  }, []);
  return (
    <div className="Income">
      <main className=" py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Income</h2>
        <div className="income-comtent">
          <div className="form-container">
            <Form />
          </div>
          <div className="income">
            {incomes.map((income) => {
              const { title, amount, date, category, description } = income;
              return;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Income;
