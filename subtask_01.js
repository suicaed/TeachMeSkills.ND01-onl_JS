'use strict'

const url = 'https://jsonplaceholder.typicode.com/todos'
const headers = {
  'Content-type': 'application/json'
};

(async () => {
  try {
    const todoUrl = `${url}/1`
    const response = await fetch(todoUrl)
    const todo = await response.json()

    if (response.ok) {
      console.log('Successfully got todo which we will update', todo)
    }

    const updatedTodo = {
      ...todo,
      completed: true
    }

    const data = JSON.stringify(updatedTodo)

    const updateResponse = await fetch(todoUrl, {
      method: 'PUT',
      headers,
      body: data,
    })
    const updatedTodoInResponse = await updateResponse.json()
    
    if (updateResponse.ok) {
      console.log('Successfully updated todo', updatedTodoInResponse)
    }

    const deleteResponse = await fetch(todoUrl, {
      method: 'DELETE',
    })

    if (deleteResponse.ok) {
      console.log('Successfully deleted todo')
    }

  } catch (error) {
    console.error(error)
  }
})()
