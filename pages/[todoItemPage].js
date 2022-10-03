import { useRouter } from 'next/router'
import TodoItemBlock from '../components/blocks/todoItemsBlock'
import { useState, useEffect } from 'react'
import fetchData from '../lib/fetchData'


export default function TodoItemPage() {
  const [data, setData] = useState({})
  const initialAddTask = { data: { title: '', todo_list: '', completed: false } }
  const [addTask, setAddTask] = useState(initialAddTask)
  const [status, setStatus] = useState({})
  const listId = useRouter().query.todoItemPage

  useEffect(() => {
    fetchData(listId && `/api/todo-lists/${listId}?populate=*`, 'GET').then(i => i && setData(i))
  }, [listId, status])

  useEffect(() => {
    listId && setAddTask({ ...addTask, data: { ...addTask.data, todo_list: listId } })
  }, [listId])

  async function addTaskHandler() {
    if (addTask.data.title) {
      const result = await fetchData('/api/todo-items', 'POST', addTask)
      setStatus(result)
      setAddTask(initialAddTask)
    }
  }
  async function removeTaskHandler(e) {
    const result = await fetchData(`/api/todo-items/${e.target.id}`, 'DELETE')
    setStatus(result)
  }
  if (data.hasOwnProperty('data')) {
    return (
      <TodoItemBlock
        data={data}
        setAddTask={setAddTask}
        addTask={addTask}
        handler={addTaskHandler}
        handlerRemove={removeTaskHandler}
      />
    )
  } else {
    return <h1>isLoading</h1>
  }
}
