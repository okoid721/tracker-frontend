import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { FaCommentAlt } from 'react-icons/fa';
import Button from '../Button/Button';

const IncomeItems = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) => {
  return (
    <div className=" bg-[#FCF6F9] border-[2px] border-[#ffff] rounded-[20px] p-4 mb-4 flex items-center gap-4 w-[100%] text-[#222260] ">
      <div className="w-[80px] h-[80px] rounded-[20px] bg-[#F5F5F5] flex items-center justify-center border-[2px] border-white "></div>
      <div className=" flex-1 flex flex-col gap-2  ">
        <h5 className=" text-2xl pl-8 relative ">{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              Amount: <TbCurrencyNaira size={30} /> ${amount}{' '}
            </p>
            <p>
              <IoCalendarNumberSharp size={30} /> ${amount}{' '}
            </p>
            <p>
              <FaCommentAlt />
              {description}
            </p>
          </div>
          <div className="btn-con">
            {' '}
            <Button label="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItems;
