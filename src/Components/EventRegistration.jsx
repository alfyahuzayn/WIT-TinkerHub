import React from 'react'

function EventRegistration(props) {
  return (
    <div id='about'>
       <div className='about-text'>
         <h2> {props.title} </h2>
         <p>dmfgner ighufjgrb yt yukh uydnvrtvgfn hehjn,hn.</p>
         <button>{props.button}</button>
       </div>
       <div className='about-image'>
       <img src={props.image} alt=''/>
     </div>
    </div>
  );
}

export default EventRegistration;
