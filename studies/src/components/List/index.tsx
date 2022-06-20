import React from "react";
import style from './list.module.scss'

function List_task(){
    const tasks = [{
        title : "react",
        time : "00:03:00"
    },
    {
        title : "JavaScript",
        time : "03:00:00"
    }]

    return (
        <aside className={style.listaTarefas}>
           <h2>
               Tasks of day </h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                    <h3>
                      {item.title}
                    </h3>
                    <span>
                        {item.time}
                    </span>
                </li> 
                ))}
            </ul>
        </aside>
    )
}

export default List_task;