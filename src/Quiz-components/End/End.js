import React, {useState, useEffect} from 'react';
import './End.css';
import {formatTime} from '../utils';


 const End = ({results, data, onReset, onAnswerCheck, time}) => {
     const [correctAnswers, setCorrectAnswers] = useState(0);

     useEffect(() => {
         let correct = 0;
         results.forEach((result, i) =>{
             if (result.a === data[i].answer){
                 correct ++;
             }
         });
         setCorrectAnswers(correct);
         // eslint-disable-next-line 
     }, []);
    return (
        <div className = "App">
        <div className = "card">
            <div className = "card-content">
                <div className = "content">
                    <h3>Your results</h3>
                    <p> {correctAnswers} of {data.length}</p>
                    <p>{Math.floor((correctAnswers / data.length) * 100)}%</p>
                    <p><span>Your time:</span> {formatTime(time)}</p>
                    <button className = "button is-info mr-2" onClick ={onAnswerCheck}>Check Your Answer</button>
                    <button className = "button is-success" onClick = {onReset}>Try again</button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default End