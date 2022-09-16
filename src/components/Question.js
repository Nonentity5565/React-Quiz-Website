import React from 'react';
import './Question.css'
import { nanoid } from 'nanoid'

// "category": "Geography",
// "id": "625e9dff796f721e95543f38",
// "correctAnswer": "Brazil",
// "incorrectAnswers": [
//     "Jamaica",
//     "Faroe Islands",
//     "Iran"
// ],
// "question": "Which country's flag can be described as 'Green with a yellow diamond in the center with a blue celestial globe.'?",
// "tags": [
//     "flags",
//     "geography"
// ],
// "type": "Multiple Choice",
// "difficulty": "easy",
// "regions": []

export default function Question({data}) {
    const [answerList, setAnswerList] = React.useState(generateRandomAnswerObject())

    // Takes in initial list of answer text and adds useful properties to it and returns it as an object
    function generateAnswerObject (arr){
        return arr.map(answer => {
            return {
                value: answer,
                className: 'normal-btn',
                disabled: false
            }
        })
    }

    // Scrambles the answer list
    // Fisher-Yales shuffle https://bost.ocks.org/mike/shuffle/
    function scramble(arr) {
        let m = arr.length, index, temp;

        while (m){
            index = Math.floor(Math.random() * m--);

            temp = arr[m];
            arr[m] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    // Creates a new array of randomized answer objects
    function generateRandomAnswerObject () {
        const initialAnswer = generateAnswerObject([...data.incorrectAnswers, data.correctAnswer]);
        return scramble(initialAnswer)
    }
    
    function handleClick (event){
        setAnswerList(oldState => {
            const newState = oldState.map(obj => {
                let newClassName = 'normal-btn';
                if (obj.value === event.target.value) {
                    newClassName = 'incorrect-btn'
                    if (event.target.value === data.correctAnswer) {
                        newClassName = 'correct-btn'
                    }
                }

                return {
                    ...obj,
                    disabled: true,
                    className: newClassName,
                }
            })
            
            console.log(JSON.stringify(newState));
            return newState;
        })
    }

    const answerElements = answerList.map((answer) => {
        return (
        <button 
        key={nanoid()} 
        value={answer.value}
        className={answer.className} 
        disabled={answer.disabled}
        onClick={handleClick}>
            {answer.value}
        </button>)
    }
    )
    
    return (
        <div className='question-con'>
            <div className='question-text'>{data.question}</div>
            <div>{answerElements}</div>
        </div>
    )
}
