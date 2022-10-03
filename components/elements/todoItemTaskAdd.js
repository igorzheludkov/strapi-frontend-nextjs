import Image from 'next/image'

export default function TodoItemTaskAdd({ setAddTask, addTask, handler }) {

  return (
    <div style={s.wrapper}>
      <input onChange={(e) => setAddTask({...addTask, data: {...addTask.data, title: e.target.value}})} value={addTask.data.title} style={s.input} type='text' placeholder='Додайте нове завдання' />
      <button onClick={handler} style={s.icon}>
        <Image src='/task-add.png' width={20} height={20} alt='add task icon' />
      </button>
    </div>
  )
}

const s = {
  wrapper: {
    padding: 5,
    border: '1px solid grey',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: { fontSize: 14, width: '100%' },
  icon: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    width: 35,
    height: 35
  },
}
