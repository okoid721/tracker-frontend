import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';

const Form = () => {
  const { addIncome, getIncome, error } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: null,
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setInputState({ ...inputState, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    // Clear the form after submission
    setInputState({
      title: '',
      amount: '',
      date: null,
      category: '',
      description: '',
    });
    getIncome();
  };

  return (
    <form
      className="text-black flex flex-col lg:gap-[2rem] gap-[10px]"
      onSubmit={handleSubmit}
    >
      <div className="w-[100%]">
        <input
          type="text"
          value={title}
          name={'title'}
          placeholder="Salary Title"
          onChange={handleInput('title')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]"
        />
      </div>
      <div className="w-[100%]">
        <input
          type="text"
          value={amount}
          name={'amount'}
          placeholder="Salary Amount"
          onChange={handleInput('amount')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]"
        />
      </div>
      <div className=" w-[100%] flex flex-col lg:flex-row lg:items-center gap-[10px] lg:justify-between ">
        <div className=" z-0">
          <DatePicker
            id="date"
            placeholderText="Enter A Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={handleDateChange}
            className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white "
          />
        </div>
        <div className=" ">
          <select
            name="category"
            value={category}
            id="category"
            required
            onChange={handleInput('category')}
            className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white "
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
      </div>
      <div className="">
        <textarea
          name={'description'}
          id="description"
          value={description}
          cols="20"
          rows="5"
          onChange={handleInput('description')}
          placeholder="Description"
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px]  border-white  "
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button type="submit" label="Add Income" />{' '}
        {/* Trigger form submission */}
      </div>
    </form>
  );
};

export default Form;
