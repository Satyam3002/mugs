import React from 'react';

const Copyright = ({ bgClass = 'bg-customBR' }) => {
  return (
    <div className={`text-white text-lg font-poppins font-normal text-center py-5 ${bgClass}`}>
      © 2023 <span className="text-customOrange font-bold">Mumair</span> All rights reserved, Inc.
    </div>
  );
};

export default Copyright;
