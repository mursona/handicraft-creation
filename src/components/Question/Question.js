import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='question-heading'>
            <h2>Top 3 ReactJS Interview Questions and Answers</h2>
            <hr/>
            </div>
            <div className='row-container'>
            <div className='col1'>
            <h3>How Does React Works?</h3>
                    <p>
                        React defines the logical structure of documents and the way a document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                    </p>
            </div>
                
            <div className='col2'>
            <h3>Difference between props and state in React.</h3>
                <p>
                    <ul>
                        <li>Components receive data from outside with props, whereas they can create and manage their own data with state</li>
                        <li>Props are used to pass data, whereas state is for managing data</li>
                        <li>Data from props is read-only, and cannot be modified by a component that is receiving it from outside</li>
                    </ul>
                </p>
            </div>
                
            <div className='col3'>
            <h3>Where use useEffect except data fetching?</h3>
                <p>
                    useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Question;