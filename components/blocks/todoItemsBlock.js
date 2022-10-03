import TodoItemHeader from '../elements/todoItemHeader'
import TodoItemTask from '../elements/todoItemTask'
import TodoItemTaskAdd from '../elements/todoItemTaskAdd'

export default function TodoItemBlock({ data, setAddTask, addTask }) {
  const render = data.data.attributes.todo_items.data

  return (
    <>
      <TodoItemHeader data={data} />
      <TodoItemTaskAdd setAddTask={setAddTask} addTask={addTask}/>
      {render.map((i) => (
        <TodoItemTask key={i.id} data={i} />
      ))}
    </>
  )
}
