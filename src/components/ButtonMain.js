import React from 'react';

function ButtonMain(props) {
  return (
    <div className='mt-8'>
      <a className={`hover:text-gray-900 hover:bg-white duration-300 shadow-xl font-bold text-xl text-white px-8 py-4 rounded-xl ${props.className}`} href={props.link}>{props.text}</a>
    </div>
  );
}

export default ButtonMain;
