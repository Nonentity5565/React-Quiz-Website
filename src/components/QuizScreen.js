import React from 'react';
import './QuizScreen.css'
import Question from './Question.js'

export default function QuizScreen() {
    // Trigger used to fetch new list of questions
    const [resetTrigger, setResetTrigger] = React.useState(false);

    // State variable that hold list of questions
    const [quizData, setQuizData] = React.useState([]);

    // Fetch new questions with triggered    
    React.useEffect(() => {
        fetch('https://the-trivia-api.com/api/questions?limit=5')
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.log(error))
    }, [resetTrigger])

    // Flips value to trigger effect
    function generateNewQuestions() {
        setResetTrigger(oldState => !oldState)
    }
    
    // List of Question elements
    const questionElements = quizData.map(question => {
            return <Question key={question.id} data={question} />
        }
    )
    
    return (
        <div className="quiz-con"> 
            {questionElements}
            <button className="reset-btn" onClick={generateNewQuestions}>Reset</button>
        </div>
    );
};