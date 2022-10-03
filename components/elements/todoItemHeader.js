import Image from 'next/image'
import Link from 'next/link'

export default function TodoItemHeader({ data }) {

  return (
    <div style={s.wrapper}>
      <button style={s.arrowBack}>
        <Link href={`${data.data.id}`}>
          <a style={s.a}>
            <Image src='/arrow-back.svg' width={20} height={20} alt='back icon' />
          </a>
        </Link>
      </button>
      <h2 style={s.title}>{data.data.attributes.title}</h2>
      <button style={s.icon}>
        <Image src='/remove.png' width={20} height={20} alt='remove icon' />
      </button>
    </div>
  )
}

const s = {
  wrapper: {
    padding: 10,
    // border: '1px solid grey',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrowBack: {
    borderRadius: '50%',
    width: 30,
    height: 30,
    margin: 0,
    padding: 0,
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  a: {
    margin: 0,
    padding: 0,
    width: 20,
    height: 20
  }
}
