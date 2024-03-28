import React from 'react';
import { useState } from "react";

import NewTaskInput from './NewTaskInput.jsx';
import Task from './Task.jsx';


//import './App.css';

export default function ToDoList()  {

  let [toDo, setToDo] = useState([
    {"id": 1, "title": "Task 1", "status": false, "date": Date.now},
    {"id": 2, "title": "Task 2", "status": true, "date": Date.now}
  ]);

  const addTask = (text) => {
    //toDo.push({id: toDo[toDo.length-1].id + 1, title: text, status:false});
    const newTodoItems = [...toDo, {id: toDo[toDo.length-1].id + 1, title: text, status:false, "date": Date.now}];
    setToDo(newTodoItems);
  };
  const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id));
  };
  const Modify = (id, content) => {
    let indexTask = toDo.findIndex(task => task.id == id);
    let tmpToDo = toDo;
    tmpToDo[indexTask].title = content;
    setToDo(tmpToDo);
  };
  const Update = (id, state, dateStart) => {
    let indexTask = toDo.findIndex(task => task.id == id);
    let tmpToDo = toDo;
    tmpToDo[indexTask].status = state;
    tmpToDo[indexTask].date = dateStart;
    setToDo(tmpToDo);
  };

  const Show = () => {
    const list = [];
    for (let index = 0; index < toDo.length; index++) {
      list.push(<Task key={index} id={toDo[index].id} text={toDo[index].title} status={toDo[index].status} deleteTask={deleteTask} updateTask={Update} modifyTask={Modify}/>);
    }
    return (<div className='list-tasks'>{list}</div>);
  };

  return (
    <div className='full to-do-list'>
      <p>To-Do List</p>
      <NewTaskInput handler={addTask} />
      <Show/>
      
    </div>
  );

  
}

