import React from 'react';

function Propfun(props) {
    console.log(props)
  return (
    <div className='mb-4'>
      <h1 className='text-3xl text-center'>Hello {props.name}</h1>
      <h1 className='text-3xl text-center'>Hello {props.email}</h1>
    </div>


  );
}

export default Propfun;