import Image from 'next/image'
import Link from 'next/link'

export default function TodoItemTask({ data }) {
  console.log(data);
  return (
    <div style={s.wrapper}>
      <input type='checkbox' />
      <h2 style={s.title}>{data.attributes.title}</h2>
      <button style={s.icon}>
        <Image src='/remove.png' width={20} height={20} alt='remove icon' />
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
  title: { fontSize: 14 },
  icon: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    width: 35,
    height: 35
  },
  a: {
    margin: 0,
    padding: 0,
    width: 20,
    height: 20
  }
}
