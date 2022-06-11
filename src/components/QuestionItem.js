import React from 'react'

function QuestionItem({ question, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question

  function handleDeleteClick(e) {
    // console.log(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => handleDelete(question.id))
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
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  )
}

export default QuestionItem
