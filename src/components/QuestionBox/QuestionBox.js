import React, {useState, useEffect, useRef} from 'react';
import './QuestionBox.css';
import {formatTime2} from '../utils';



 const QuestionBox = ({data, onAnswerUpdate,numberOfQuestions,currentQuestion,onSetCurrentQuestion,onSetStep}) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const [seconds, setSeconds] = useState(120)
    const radioWrapper = useRef();

    useEffect(() =>{
        const findCheckedInput = radioWrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked = false;
        }
    }, [data])
    useEffect(() => {
        if(seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000)
        } else {
            onSetStep(4)
        }
    })


    const changeHandler = (event) =>{
        setSelected(event.target.value);
        if(error){
            setError('');
        }
    };

    const nextClickHandler = (event) =>{
        if(selected === "") {
         return   setError(`Please select an answer!!!`);
        }
        onAnswerUpdate(prevState =>[...prevState, {q: data.question, a: selected}]);
        setSelected("");
        if(currentQuestion < numberOfQuestions -1){
            onSetCurrentQuestion(currentQuestion + 1);
        } else {
            onSetStep(4);
        }
    }
    return (
        <div className = "App">
        <div className= "card">
            <div className = "card-content">
                <div className ="content">
                <h4>{currentQuestion + 1} of {numberOfQuestions}</h4>
                <p> Time left: <h4 className ="has-text-danger">{formatTime2(seconds)}</h4></p>
                  <h2 className = "mb-5">{data.question}</h2>
                  <div className ="control" ref ={radioWrapper}>
                      {data.options.map((choice, i) => (
                        <label className ="radio has-background-light">
                            <input type ="radio" name ="answer" value={choice} onChange = {changeHandler} />
                            {choice}
                        </label>
                      ))}
                      
                  </div> 
                   {error &&<div className ="has-text-danger">{error}</div>}
                   <button className ="button is-link is-medium is-fullwidth mt-4" onClick ={nextClickHandler} >Next</button>
                </div> 
            </div>
         </div>   
        </div>
    )
}




export default QuestionBox;