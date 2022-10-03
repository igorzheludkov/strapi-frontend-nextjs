import Image from 'next/image'
import Link from 'next/link'

export default function TodoItemTaskAdd({ setAddTask, addTask }) {
  return (
    <div style={s.wrapper}>
      <input onChange={(e) => setAddTask(e.target.value)} value={addTask} style={s.input} type='text' placeholder='Додайте нове завдання' />
      <button style={s.icon}>
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
