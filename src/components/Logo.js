import React from 'react';

function Logo(props) {
  const logoClasses = `h-16 w-16 ${props.customClass}`;
  
  return (
    <div>
      <img className={logoClasses} src={props.src} alt={props.alt} />
    </div>
  );
}

export default Logo;
