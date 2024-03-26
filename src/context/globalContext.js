import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [saving, setSaving] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async () => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, incomes);
    } catch (error) {
      setIncomes(error.response.data.message);
      console.log('error in globalContext addincome');
    }
  };
  return (
    <GlobalContext.Provider value={{ addIncome }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
