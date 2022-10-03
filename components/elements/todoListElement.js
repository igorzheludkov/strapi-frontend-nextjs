import Image from 'next/image'
import Link from 'next/link'

export default function todoListElement({ data }) {

  return (
    <div style={s.wrapper}>
      <Link href={`${data.id}`} style={s.title}>
        <a>{data.attributes.title}</a>
      </Link>
      <button style={s.icon}>
        <Image src='/remove.png' width={20} height={20} alt='remove icon' />
      </button>
    </div>
  )
}

const s = {
  wrapper: {
    padding: 10,
    border: '1px solid grey',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: { fontSize: 18 },
  icon: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    width: 35,
    height: 35
  }
}
