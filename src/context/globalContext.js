import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [saving, setSaving] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  addIncome();
  const getIncome = async (income) => {
    const response = await axios.get(`${BASE_URL}/get-incomes`, income);
    setIncomes(response.data);
  };
  getIncome();
  return (
    <GlobalContext.Provider value={{ addIncome, getIncome, incomes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
