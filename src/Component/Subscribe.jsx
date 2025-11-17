import React from 'react';
import '../Styles/Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe ">
      <div className="subscribe-container container ">
        <div className="subscribe-text fs-4">
          <h3 className='subscribe-title'>Subscribe To Our Newsletter</h3>
          <p className=' opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!</p>
        </div>

        <div className="subscribe-bar">
          <form className="d-flex" role="search">
            <input className="form-control " type="email" aria-label="Email" placeholder='Enter Your Email '/>
            <button className="form-btn btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;


