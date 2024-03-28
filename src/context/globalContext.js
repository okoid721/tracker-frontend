import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
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

  // You may want to call these functions when necessary, not immediately after defining them
  // addIncome();
  //  getIncome();

  return (
    <GlobalContext.Provider
      value={{ addIncome, getIncome, incomes, deleteIncome }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
