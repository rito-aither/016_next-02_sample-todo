// pages/index.tsx

import { useState, useEffect } from 'react'
import axios from 'axios'

import '../app/globals.css'

type Todo = {
    id: number
    todo: string
    status: todoStatus
    is_delete: boolean
}
type todoStatus = 'todo' | 'doing' | 'done'

const KanbanTodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const response = await axios.get('/api/todos')
            console.log(response.data)

            setTodos(response.data)
        } catch (error) {
            console.error('Error fetching todos:', error)
        }
    }

    // todo新規作成
    const handleAddTodo = async () => {
        try {
            const response = await axios.post('/api/todos', {
                todo: newTodo,
                status: 'todo',
                is_delete: false,
            })
            setTodos([...todos, response.data])
            setNewTodo('')
        } catch (error) {
            console.error('Error adding todo:', error)
        }
    }

    // todo更新
    const handleUpdateTodo = async (
        index: number,
        todoId: number,
        newStatus: todoStatus
    ) => {
        try {
            const response = await axios.put(`/api/todos/${todoId}`, {
                todo: todos[index].todo,
                status: newStatus,
                is_delete: todos[index].is_delete,
            })
            fetchTodos()
        } catch (error) {
            console.error('Error ChangeStatus todo:', error)
        }
    }
    return (
        <div className=''>
            <div className ="h-10 mt-10 mb-10 ml-1 mr-5">
                <input className='ml-5 mr-5 text-black'
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div className="ml-10 flex flex-row text-white space-x-56 > *">
                <div>
                    <h2>ToDo</h2>
                    <ul>
                        {todos
                            .filter((todo) => todo.status === 'todo')
                            .map((todo, index) => (
                                <li key={todo.id}>
                                    {todo.todo}
                                    <button className='bg-orange-300 ml-5'
                                        onClick={() =>
                                            handleUpdateTodo(
                                                index,
                                                todo.id,
                                                'doing'
                                            )
                                        }
                                    >
                                        Start
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div>
                    <h2>doing</h2>
                    <ul>
                        {todos
                            .filter((todo) => todo.status === 'doing')
                            .map((todo, index) => (
                                <li key={todo.id}>
                                    {todo.todo}
                                    <button className='bg-orange-300 ml-5'
                                        onClick={() =>
                                            handleUpdateTodo(
                                                index,
                                                todo.id,
                                                'done'
                                            )
                                        }
                                    >
                                        Complete
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div>
                    <h2>Done</h2>
                    <ul>
                        {todos
                            .filter((todo) => todo.status === 'done')
                            .map((todo) => (
                                <li key={todo.id}>{todo.todo}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default KanbanTodoApp
