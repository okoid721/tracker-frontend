import React from 'react';

const Button = ({ label }) => {
  return (
    <button type="submit" className="px-8 py-4 bg-white rounded-md shadow-lg">
      {label}
    </button>
  );
};

export default Button;
