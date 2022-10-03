import { useRouter } from 'next/router'
import TodoItemBlock from '../components/blocks/todoItemsBlock'
import useGetData from '../hooks/useGetData'
import { useState, useEffect } from 'react'

export default function TodoItemPage() {
  const [data, setData] = useState({})
  const listId = useRouter().query.todoItemPage

  const query = useGetData(listId && `/api/todo-lists/${listId}?populate=*`, 'GET')

  useEffect(() => {
    if (listId) {
      setData(query)
    }
  }, [listId, query])


  if (data.hasOwnProperty('data')) {
    return <TodoItemBlock data={data} />
  } else {
    return <h1>isLoading</h1>
  }
}
