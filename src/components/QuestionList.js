import React from 'react'
import QuestionItem from './QuestionItem'

function QuestionList({ questions, handleDelete, handleChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => {
          return (
            <QuestionItem
              key={question.id}
              question={question}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default QuestionList
