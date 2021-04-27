import React from 'react';
import './Start.css';

 const Start = ({onQuizStart, numberOfQuestions}) => {
    return (
        <div className = "App">
        <div className= "card">
            <div className= "card-content">
                <div className="content">
                    <h1>Start the test</h1>
                    <p>You have 2 mins to complete {numberOfQuestions} questions</p>
                    <p>Good luck</p>
                    <button className= "button is-info is-medium" 
                    onClick ={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Start;