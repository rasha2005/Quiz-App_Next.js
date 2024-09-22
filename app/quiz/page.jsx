 "use client"

import React , {useState} from "react";
import { quiz } from "../data";

const Page = () => {
    const [activeQusetion , setActiveQusetion] = useState(0);
    const [selectedAnswer , setSelectedAnswer] =useState('');
    const [checked , setChecked] = useState(false);
    const [selectedAnswerIndex , setSelectedAnswerIndex] = useState(null);
    const [showResult , setShowResult] = useState(false);
    const [result , setResult] = useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0
    });

    const {questions} = quiz;
    const {question , answers , correctAnswer} = questions[activeQusetion];

    const onAnswerSelected = (answer , idx) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        if(answer === correctAnswer) {
            setSelectedAnswer(true);
            console.log("true");
        }else{
            setSelectedAnswer(false);
            console.log("false");
        }

    }
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) => 
        selectedAnswer ? 
        {
            ...prev ,
            score : prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
        }: 
        {
            ...prev,
            wrongAnswers:prev.wrongAnswers + 1,
        });
        if(activeQusetion !== questions.length - 1) {
            setActiveQusetion((prev) => prev + 1)
        }else{
            setActiveQusetion(0);
            setShowResult(true);
        }
        setChecked(false);
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6">Quiz Page</h1>
    
        <div className="w-full max-w-xl">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    
                <div>
                    {!showResult ? (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Question: {activeQusetion + 1}
                                <span className="text-gray-400">/{questions.length}</span>
                            </h2>
                            <h3 className="text-xl font-medium mb-6">{questions[activeQusetion].question}</h3>
                            <ul className="space-y-4">
                                {answers.map((answer, idx) => (
                                    <li
                                        onClick={() => onAnswerSelected(answer, idx)}
                                        key={idx}
                                        className={`${selectedAnswerIndex === idx ? 'bg-yellow-500 text-gray-900' : 'hover:bg-gray-700'} p-3 rounded-lg cursor-pointer transition-colors duration-200`}
                                    >
                                        <span>{answer}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                {checked ? (
                                    <button
                                        onClick={nextQuestion}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg shadow-lg transition-colors duration-200"
                                    >
                                        {activeQusetion === questions.length - 1 ? "Finish" : "Next"}
                                    </button>
                                ) : (
                                    <button
                                        disabled
                                        className="bg-gray-700 text-gray-500 px-6 py-2 rounded-lg shadow-lg cursor-not-allowed"
                                    >
                                        {activeQusetion === questions.length - 1 ? "Finish" : "Next"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Results</h3>
                            <h3 className="text-xl mb-4">Overall: {(result.score / 25) * 100}%</h3>
                            <p className="mb-2">
                                Total Questions: <span className="font-semibold">{questions.length}</span>
                            </p>
                            <p className="mb-2">
                                Total Score: <span className="font-semibold">{result.score}</span>
                            </p>
                            <p className="mb-2">
                                Correct Answers: <span className="font-semibold">{result.correctAnswers}</span>
                            </p>
                            <p className="mb-6">
                                Wrong Answers: <span className="font-semibold">{result.wrongAnswers}</span>
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg shadow-lg transition-colors duration-200"
                            >
                                Restart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    

    )
}

export default Page;