import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../from/Form';
import IncomeItems from '../incomeItem/IncomeItems';

const Income = () => {
  const { addIncome, incomes, getIncome, deleteIncome } = useGlobalContext();
  React.useEffect(() => {
    getIncome();
  }, []);

  return (
    <div className=" ">
      <main className=" py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Income</h2>
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
