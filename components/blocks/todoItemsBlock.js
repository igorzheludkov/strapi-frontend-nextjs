import TodoItemHeader from '../elements/todoItemHeader'
import TodoItemTask from '../elements/todoItemTask'

export default function TodoItemBlock({ data }) {

  const render = data.data.attributes.todo_items.data
  console.log(data.data.attributes.todo_items);
  return (
    <>
      <TodoItemHeader data={data}/>
      {render.map(i=>(
        <TodoItemTask key={i.id} data={i} />
      ))}
    </>
  )
}
