/* eslint-disable default-case */
import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { FaCommentAlt } from 'react-icons/fa';
import Button from '../Button/Button';
import { FaGift } from 'react-icons/fa';
import { MdOutlineSavings } from 'react-icons/md';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaRegDotCircle } from 'react-icons/fa';
import dateFormat from '../../utils/dateFormat';
import { SiFreelancer } from 'react-icons/si';

const IncomeItems = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}) => {
  const categoryIcon = () => {
    switch (category) {
      case 'Salary':
        return <TbCurrencyNaira size={20} />;
      case 'Bonus':
        return <FaGift size={20} />;
      case 'Investment':
        return <MdOutlineSavings size={20} />;
      case 'Transfer':
        return <FaMoneyBillTransfer size={20} />;
      case 'Freelancer':
        return <SiFreelancer size={20} />;
      case 'Others':
        return <FaRegDotCircle size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className=" bg-[#FCF6F9] border-[2px]  border-[#ffff] rounded-[20px] p-4 mb-4 flex items-center gap-4 w-[100%] text-[#222260] overflow-x-hidden ">
      <div className="w-[80px] h-[80px] rounded-[20px] lg:flex hidden bg-[#F5F5F5]  items-center justify-center border-[2px] border-white ">
        {categoryIcon()}
      </div>
      <div className=" flex-1 flex  flex-col lg:gap-0   gap-2 items-center lg:items-start  ">
        <div className=" flex  lg:flex-row flex-col gap-4 items-center">
          <h5 className=" text-2xl pl-8 relative  ">{title}</h5>
          <h5 className=" text-2xl pl-8 relative  ">
            From
            {category}
          </h5>
        </div>
        <div className=" flex flex-col lg:gap-32 lg:flex-row items-center  ">
          <div className=" flex lg:flex-row flex-col items-center gap-6">
            <p className=" flex items-center gap-2 text-[#333] text-[20px]  ">
              Amount: <TbCurrencyNaira size={30} />
              {amount}{' '}
            </p>
            <p className=" flex items-center gap-2 text-[#333] text-[20px]  ">
              <IoCalendarNumberSharp size={30} /> {dateFormat(date)}{' '}
            </p>
            <p className=" flex items-center gap-2 text-[#333] text-[20px]   ">
              <FaCommentAlt />
              {description}
            </p>
          </div>
          <div className="btn-con " onClick={() => deleteItem(id)}>
            {' '}
            <Button label="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItems;
