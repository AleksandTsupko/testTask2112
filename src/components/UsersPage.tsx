import React, { FunctionComponent, useEffect, useState } from "react"
import axios from 'axios';
import { IUser } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem';

const UsersPage: FunctionComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
            } catch (error) {
                alert(error)
            }
        }
        fetchUsers()
    }, [])

    return (
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
    )
}

export default UsersPage