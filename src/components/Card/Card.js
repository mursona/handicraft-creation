import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import profile from '../../images/profile.png';
import './Card.css'
import { addToLocalStorage, getStoredBreakTime } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons';

const showToastMessage = () => {

    toast('Congratulations! Compelete design', {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'toast-message'
    });
    
};

const Card = ({cardcounts}) => {
    
    const [breakTime, setBreakTime] = useState(0);


    useEffect(() => {
      const storedBreakTime = getStoredBreakTime();
      setBreakTime(storedBreakTime);
    }, []);
  
    let craftCreateTime = 0;
    let quantity = 0;
    for (const design of cardcounts) {
      quantity = quantity + design.quantity;
      craftCreateTime = craftCreateTime + (design.time * design.quantity);
    }


    const handleBreakTime = (breaktime) => {
      const element = breaktime.target;
      element.classList.toggle('active');
  
      setBreakTime(breaktime.target.innerText);
      addToLocalStorage(breaktime.target.innerText);
    };

    return (

        <div className="card-details">
        <div className="user-info">
          <img src={profile} alt="" />
          <div>
            <strong>Chong Yong</strong>
            <p>
              <span className='loaction'><FontAwesomeIcon icon={faLocationPinLock}></FontAwesomeIcon></span>
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
  
        <div className="user-details-info">
          <div>
            <p><strong>50</strong><span>kg</span></p>
            <p>Weight</p>
          </div>
          <div>
            <p><strong>5.5</strong><span>inch</span></p>
            <p>Height</p>
          </div>
          <div>
            <p><strong>27</strong><span>yrs</span></p>
            <p>Age</p>
          </div>
        </div>
  
        <h5>Add A Break (hr)</h5>
        <div className="break">
          <span onClick={(breaktime) => handleBreakTime(breaktime)}>1</span>
          <span onClick={(breaktime) => handleBreakTime(breaktime)}>2</span>
          <span onClick={(breaktime) => handleBreakTime(breaktime)}>4</span>
          <span onClick={(breaktime) => handleBreakTime(breaktime)}>6</span>
          <span onClick={(breaktime) => handleBreakTime(breaktime)}>8</span>
        </div>
        <h3>Production Details</h3>
        <div className="production-times">
          <strong>Production Time</strong>
          <span>{craftCreateTime} hour</span>
        </div>
        <div className="divider"></div>
  
        <div className="break-times">
          <strong>Break Time</strong>
          <span>{breakTime} hour</span>
        </div>

        <button onClick={showToastMessage} className='btn-toast'>Activity Completed</button>
        <ToastContainer />
      </div>
    );
};

export default Card;