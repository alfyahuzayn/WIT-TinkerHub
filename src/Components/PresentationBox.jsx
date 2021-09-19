import React from 'react';

function PresentationBox(props) {
  return (
    <div className='pre-box'>
    <div className='pre-b-img'>
    <img src={props.image}/>
    </div>
    </div>
  );
}

export default PresentationBox;

