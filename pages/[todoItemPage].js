import { useRouter } from 'next/router'
import TodoItemBlock from '../components/blocks/todoItemsBlock'
import useGetData from '../hooks/useGetData'
import { useState, useEffect } from 'react'

export default function TodoItemPage() {
  const [data, setData] = useState({})
  const [addTask, setAddTask] = useState('')
  const listId = useRouter().query.todoItemPage

  console.log(addTask);

  const query = useGetData(listId && `/api/todo-lists/${listId}?populate=*`, 'GET')

  useEffect(() => {
    if (listId) {
      setData(query)
    }
  }, [listId, query])


  if (data.hasOwnProperty('data')) {
    return <TodoItemBlock data={data} setAddTask={setAddTask} addTask={addTask}/>
  } else {
    return <h1>isLoading</h1>
  }
}
