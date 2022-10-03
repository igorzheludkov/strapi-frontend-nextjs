import TodoListElement from '../elements/todoListElement'
import { useState, useEffect } from 'react'
import fetchData from '../../lib/fetchData'

export default function TodoListBlock() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData('/api/todo-lists?populate=*', 'GET').then((i) => setData(i))
  }, [])

  const [render, setRender] = useState({ data: [], meta: {} })

  useEffect(() => {
    data.data && setRender(data)
  }, [data])

  return (
    <>
      {render.data.map((i) => (
        <TodoListElement key={i.id} data={i} />
      ))}
    </>
  )
}
