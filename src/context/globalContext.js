import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/add-income`,
        income
      );
    } catch (err) {
      setError(err.response.data.message);
    }
    getIncome();
  };

  const getIncome = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/get-incomes`
      );
      setIncomes(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/delete/${id}`
      );
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getIncome();
  };

  const addExpenses = async (expense) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/add-expenses`,
        expense
      );
    } catch (err) {
      setError(err.response.data.message);
    }
    getIncome();
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/get-expenses`
      );
      setExpenses(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const deleteExpenses = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/delete-expenses/${id}`
      );
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getExpenses();
  };
  const addSavings = async (savings) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/add-saving`,
        savings
      );
    } catch (err) {
      setError(err.response.data.message);
    }
    getSavings();
  };

  const getSavings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/get-saving`
      );
      setSavings(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const deleteSavings = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/delete-saving/${id}`
      );
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getSavings();
  };

  // You may want to call these functions when necessary, not immediately after defining them
  // addIncome();
  //  getIncome();

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };
  console.log(totalIncome());

  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((income) => {
      totalExpenses = totalExpenses + income.amount;
    });
    return totalExpenses;
  };
  console.log(totalExpenses());

  const totalSavings = () => {
    let totalSavings = 0;
    expenses.forEach((income) => {
      totalSavings = totalSavings + income.amount;
    });
    return totalSavings;
  };
  console.log(totalSavings());

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        deleteIncome,
        totalIncome,
        addExpenses,
        expenses,
        getExpenses,
        deleteExpenses,
        totalExpenses,
        addSavings,
        getSavings,
        deleteSavings,
        savings,
        totalSavings,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
