import React from 'react';
import './Design.css';

const Design = (props) => {
    const {name , creatorname, info, img, time} = props.design;

    return (
        <div>
            <div className='design'>
                <img src={img} alt=""></img>
                <p className='craftname'>Craft Name : {name}</p>
                <div className='design-info'>
                <p><small className='infotext'>{info}</small></p>
                <p className='creatorname'>Created By: {creatorname}</p>
                <p><small>Production Timeline : {time}hr</small></p>
                </div>
                <button onClick={() => props.handleAddToCard(props.design)} className='btn-card'><p>Select Craft</p>
                </button>
            </div>
        </div>
    );
};

export default Design;