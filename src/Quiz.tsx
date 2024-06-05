import React, { useState } from 'react';
import Question from './Question';

// const Catogries = [
// 	{
// 		Catogries: 'PHP',
// 		choices: ['false', 'True'],
// 		answer: 'Array',
// 	},
// 	{
// 		Catogries: 'Math',
// 		choices: ['false', 'True'],
// 		answer: 'False',
// 	},
// 	{
// 		Catogries: 'C++',
// 		choices: ['false', 'True'],
// 		answer: 'True',
// 	},
// 	{
// 		Catogries: 'Css"',
// 		choices: ['false', 'True'],
// 		answer: 'false',
// 	},
// ];


const questions = [
	{
		question: 'Parent constructors are not called implicitly if the child class defin…',
		choices: ['false', 'True'],
		answer: 'Array',
	},
	{
		question: 'In PHP, a class can be inherited from one base class and with multiple…',
		choices: ['false', 'True'],
		answer: 'False',
	},
	{
		question: '$ this is a reference to the calling object.',
		choices: ['false', 'True'],
		answer: 'True',
	},
	{
		question: 'The MIME type for a CSS style sheet is "stylesheet = CSS"',
		choices: ['false', 'True'],
		answer: 'false',
	},
	{
		question: 'Elements that have higher z-index values are displayed in front of ele…',
		choices: ['false', 'True'],
		answer: 'True',
	},
];

const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const handleAnswer = (answer: string) => {
		if (answer === questions[currentQuestion].answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert(`Quiz finished. You scored ${score}/${questions.length}`);
		}
	};

	return (
		<div>
			<h1 className="text-center">Quiz App</h1>
			{currentQuestion < questions.length ? (
				<Question
					question={questions[currentQuestion].question}
					choices={questions[currentQuestion].choices}
					answer={questions[currentQuestion].answer}
					onAnswer={handleAnswer}
				/>
			) : "null"
			}
		</div>
	)
}

export default Quiz;
