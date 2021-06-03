import React, {useState, useEffect} from 'react';
import './Quiz.css';
import Start from './Quiz-components/Start/Start';
import QuestionBox from './Quiz-components/QuestionBox/QuestionBox';
import End from './Quiz-components/End/End';
import LandingPage from './Quiz-components/LandingPage/LandingPage';
import Modal from './Quiz-components/Modal';

import QuizData from './Quiz-components/Data/QuizData';
 
import 'bulma/css/bulma.min.css';
let interval;

function Quiz() {
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
   if( step === 4){
     clearInterval(interval)
   }
  }, [step])

  const getStarted = () => {
    setStep(2);
  }


  const quizStarterHandler = () =>{
    setStep(3);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }

  const resetQuizHandler = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <>
    
    <div className="App">
    <div>
      { step === 1 && <LandingPage onGetStarted = {getStarted} />}
    </div>   
     { step === 2 && <Start onQuizStart ={quizStarterHandler}
     numberOfQuestions = {QuizData.length}
      />}
     { step === 3 && <QuestionBox
     data = {QuizData[currentQuestion]}
     onAnswerUpdate = {setAnswers}
     numberOfQuestions = {QuizData.length}
     currentQuestion = {currentQuestion}
     onSetCurrentQuestion = {setCurrentQuestion}
     onSetStep = {setStep} />}
     { step === 4 && <End 
     results ={answers}
     data = {QuizData}
     onReset = {resetQuizHandler}
     onAnswerCheck ={() => setShowModal(true)}
     time ={time}
     />}

     {showModal && <Modal 
     onClose = {() => setShowModal(false) } 
     results = {answers}
     data = {QuizData}
     />}
    </div>
    </>
  );
}

export default Quiz;
