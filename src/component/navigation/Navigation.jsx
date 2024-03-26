import React, { useEffect, useRef, useState } from 'react';
import { menuItems } from '../../utils/menuItems';
import { TbLogout } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa6';

const Navigation = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuRef} className=" relative">
      <button onClick={toggleMenu}>
        <FaBars size={30} className=" lg:hidden" />
        {/* {isOpen ? 'Close Menu' : 'Open Menu'} */}
      </button>

      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <div
          className={` px-6 py-8 lg:w-[95vw]  h-[90vh] w-[300px] lg:h-[70px] bg-[#d7d7d7] border-[3px] border-white rounded-[32px] flex lg:flex-row flex-col   gap-2 items-center justify-between `}
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
                  className={` lg:flex-col flex-row gap-2 lg:gap-0  items-center text-center flex justify-center ${
                    active === item.id ? 'active text-black  ' : ''
                  }`}
                  onClick={() => setActive(item.id)}
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
    </div>
  );
};

export default Navigation;
