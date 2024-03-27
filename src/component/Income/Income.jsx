import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../from/Form';

const Income = () => {
  const { addIncome } = useGlobalContext();
  return (
    <div className="Income">
      <main className=" py-8 px-6 w-full">
        <h2>Income</h2>
        <div className="income-comtent">
          <div className="form-container">
            <Form />
          </div>
          <div className="income"></div>
        </div>
      </main>
    </div>
  );
};

export default Income;
