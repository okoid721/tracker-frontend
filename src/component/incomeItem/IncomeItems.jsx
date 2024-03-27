import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { FaCommentAlt } from 'react-icons/fa';

const IncomeItems = ({
  id,
  title,
  amount,
  date,
  category,
  deleteItem,
  indicatorColor,
  type,
}) => {
  return (
    <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default IncomeItems;
