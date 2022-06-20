import React from 'react'
import FormTask from '../components/FormTask'
import List_task from '../components/List';
import style from './app.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <FormTask/>
      <List_task/>
    </div>
  );
}

export default App;
