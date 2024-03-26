import React, { useState } from 'react';
import { menuItems } from '../../utils/menuItems';
import { TbLogout } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa6';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItemsStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2),0 25px 50px 0 rgba(0,0,0,0.1)',
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <FaBars size={30} onClick={handleToggle} className=" lg:hidden flex" />
      <div
        style={menuItemsStyle}
        className={` px-6 py-8 lg:w-[135%]  h-[120%] w-[300px] lg:h-[70px] bg-[#d7d7d7] border-[3px] border-white rounded-[32px] flex lg:flex-row flex-col   gap-2 items-center justify-between `}
      >
        <div className=" h-[100px] flex lg:flex-row flex-col items-center gap-4">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className=" w-[50px] h-[50px] rounded-[50%]"
            s
          />
          <div className=" flex items-center lg:gap-3 gap-0 lg:flex-row flex-col">
            <h2 className=" font-bold lg:text-3xl text-2xl">Mike</h2>
            <p className=" font-semibold">Your Money</p>
          </div>
        </div>
        <ul className=" flex lg:flex-row flex-col gap-5 items-center ">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className="  lg:flex-col flex-row gap-2 lg:gap-0  items-center text-center flex justify-center"
              >
                {item.icon}
                <span className="">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div>
          <li className="flex items-center flex-col ">
            {<TbLogout />} SignOut{' '}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
