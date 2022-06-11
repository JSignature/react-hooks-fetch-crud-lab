import React, { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

function App() {
  const [page, setPage] = useState('List')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => r.json())
      .then(items => setQuestions(items))
  }, [])

  function handleSubmit(newQuestion) {
    setQuestions([...questions, newQuestion])
    // console.log(questions)
  }
  function handleDelete(questionId) {
    const updatedItems = questions.filter(
      question => question.id !== questionId
    )
    setQuestions(updatedItems)
  }

  function handleChange(updatedItem) {
    const updatedItems = questions.map(question => {
      if (question.id === updatedItem.id) {
        return updatedItem
      } else {
        return question
      }
    })
    setQuestions(updatedItems)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm handleSubmit={handleSubmit} />
      ) : (
        <QuestionList
          questions={questions}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      )}
    </main>
  )
}

export default App
