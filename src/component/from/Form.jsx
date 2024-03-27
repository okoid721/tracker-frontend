import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    console.log(inputState);
  };
  return (
    <div
      className=" text-black flex flex-col gap-[2rem] "
      onSubmit={handleSubmit}
    >
      <div className="w-[100%] ">
        <input
          type="text"
          value={title}
          name={'title'}
          placeholder="Salary Title"
          onChange={handleInput('title')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]  "
        />
      </div>
      <div className="w-[100%]">
        <input
          type="text"
          value={amount}
          name={'amount'}
          placeholder="Salary Amount"
          onChange={handleInput('amount')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]   "
        />
      </div>
      <div className="w-[100%]">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          // selected={new Date(date)}
          selected={date}
          dateFormat="dd/mm/yyyy"
          onChange={(date) => setInputState({ ...inputState, date: date })}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]  "
        />
      </div>
      <div className="flex justify-end  w-[100%]">
        <select
          name="category"
          value={category}
          id="category"
          required
          onChange={handleInput('category')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]   "
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
      <div className="w-[100%]">
        <textarea
          name={'category'}
          id="category"
          value={description}
          cols="30"
          rows="10"
          onChange={handleInput('description')}
          placeholder="Description "
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white "
        ></textarea>
      </div>
      <div className="submit-btn">
        <button
          onClick={handleSubmit}
          className="px-[20px] py-[10px] bg-white rounded-md "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
