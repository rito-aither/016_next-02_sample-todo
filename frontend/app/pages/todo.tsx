// pages/index.tsx

import { useState, useEffect } from 'react'
import axios from 'axios'
import { type } from 'os'

type Todo = {
    id: number
    todo: string
    status: todoStatus
    is_delete: boolean
}
type todoStatus = 'todo' | 'doing' | 'done'

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('')
    // const axiosInstance = axios.create({
    //   baseURL: "http://express-container:3001",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
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

    // next内todo更新
    const handleChangeTodos = async (index: number, value: string) => {
        todos[index] = {
            id: todos[index].id,
            todo: value,
            status: todos[index].status,
            is_delete: todos[index].is_delete,
        }
        setTodos([...todos])
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
    const handleUpdateTodo = async (index: number, id: number) => {
        try {
            const response = await axios.put(`/api/todos/${id}`, {
                todo: todos[index].todo,
                status: todos[index].status,
                is_delete: todos[index].is_delete,
            })
            const newTodos = [...todos]
            newTodos[index] = response.data
            setTodos([...newTodos])
            setNewTodo('')
        } catch (error) {
            console.error('Error ChangeStatus todo:', error)
        }
    }
    //todoステータス更新
    const handleChangeTodoStatus = async (index: number, id: number) => {
        const todoStatus = ['todo', 'doing', 'done']
        const todoStatusToNumber = (str: todoStatus): number => {
            if (str === 'todo') {
                return 0
            }
            if (str === 'doing') {
                return 1
            }
            if (str === 'done') {
                return 2
            }
            return 0
        }
        try {
            const response = await axios.put(`/api/todos/${id}`, {
                todo: todos[index].todo,
                status:
                    todoStatusToNumber(todos[index].status) === 2
                        ? todoStatus[0]
                        : todoStatus[
                              todoStatusToNumber(todos[index].status) + 1
                          ],
                is_delete: todos[index].is_delete,
            })
            todos[index] = response.data
            setTodos([...todos])
            setNewTodo('')
        } catch (error) {
            console.error('Error ChangeStatus todo:', error)
        }
    }
    // todo削除
    const handleDeleteTodo = async (index: number, id: number) => {
        try {
            const response = await axios.delete(`/api/todos/${id}`)
            todos.splice(index, 1)
            setTodos([...todos])
        } catch (error) {
            console.error('Error Delete Status todo:', error)
        }
    }

    return (
        <div>
            <h1>ToDo App</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                }}
                            >
                                <p>{todo.id}</p>
                                {/* <h3>{todo.todo}</h3>
                                 */}
                                <input
                                    type="text"
                                    value={todo.todo}
                                    onChange={(e) =>
                                        handleChangeTodos(index, e.target.value)
                                    }
                                />
                                <p>{todo.status}</p>
                            </div>
                            <button
                                onClick={() => handleUpdateTodo(index, todo.id)}
                            >
                                handleUpdateTodo
                            </button>
                            <button
                                onClick={() =>
                                    handleChangeTodoStatus(index, todo.id)
                                }
                            >
                                handleChangeTodoStatus
                            </button>
                            <button
                                onClick={() => handleDeleteTodo(index, todo.id)}
                            >
                                Delete Todo
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default TodoApp
