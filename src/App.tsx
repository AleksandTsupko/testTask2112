import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { IUser, ITodo } from './types/types';
import EventsExample from './components/EventsExample';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
      } catch (error) {
        alert(error)
      }
    }

    async function fetchTodos() {
      try {
        const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
        setTodos(response.data)
      } catch (error) {
        alert(error)
      }
    }

    fetchTodos()
    fetchUsers()
  }, [])

  return (
    <div>
      <EventsExample />
      <Card onClick={(num) => console.log(num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Click</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />

    </div>
  );
}

export default App;
