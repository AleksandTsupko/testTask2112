import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { IUser, ITodo } from './types/types';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
          <Route path={"/users"} element={<UsersPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
