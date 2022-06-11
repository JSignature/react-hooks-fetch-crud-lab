import React, { useState } from 'react'

function QuestionItem({ question, handleDelete, handleChange }) {
  const { id, prompt, answers, correctIndex } = question
  // const [answerSelected, setAnswerSelected] = useState(correctIndex)
  //not using state because form changes automatically for user
  function handleDeleteClick(e) {
    // console.log(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => handleDelete(question.id))
  }
  function handleChangedItem(e) {
    // setAnswerSelected(e.target.value)

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }),
    })
      .then(r => r.json())
      .then(updatedItem => handleChange(updatedItem))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ))

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChangedItem} defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  )
}

export default QuestionItem
