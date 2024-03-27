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
    <div className=" bg-[#FCF6F9] border-[2px] border-[#ffff] rounded-[20px] p-4 mb-4 ">
      <div className="icon"></div>
      <div className="content">
        <h5>{title}</h5>
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
