import TodoListElement from '../elements/todoListElement'
import useGetData from '../../hooks/useGetData'
import { useState, useEffect } from 'react'


export default function TodoListBlock() {
  const data = useGetData('/api/todo-lists?populate=*', 'GET')

  const [render, setRender] = useState({data: [], meta: {}})

  useEffect(() => {
    data.data && setRender(data)
  }, [data]);

  return (
    <>
      {render.data.map((i) => (
        <TodoListElement key={i.id} data={i} />
      ))}
    </>
  )
}
