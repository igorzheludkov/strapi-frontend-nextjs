import { useRouter } from 'next/router'
import TodoItemBlock from '../components/blocks/todoItemsBlock'

export default function TodoItem() {
  const router = useRouter()

  return <TodoItemBlock />
}
