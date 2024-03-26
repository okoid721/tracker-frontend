import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = input;

  const handleInput = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(input);
    console.log(input);
  };
  return (
    <div className="form " onSubmit={(e) => e.preventDefault(handleSubmit)}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Salary Title"
          onChange={handleInput('title')}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="Salary Amount"
          onChange={handleInput('amount')}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          // selected={new Date(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setInput({ ...input, date: date })}
        />
      </div>
      <div className="selects input-control">
        <select
          name="category"
          value={category}
          id="category"
          required
          onChange={handleInput('category')}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Salary">Salary</option>
          <option value="Bonus">Bonus</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Investment">Investment</option>
          <option value="Transfer">Transfer</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="submit-btn">
        <button>Add</button>
      </div>
    </div>
  );
};

export default Form;
