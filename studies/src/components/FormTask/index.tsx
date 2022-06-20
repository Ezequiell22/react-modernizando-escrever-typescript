import React from 'react'
import Button from '../Button'
import style from './formTask.module.scss'

class FormTask extends React.Component {
    render (){
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Task
                    </label>
                    <input  
                        type="text"
                        name="task"
                        id="task"
                        placeholder='task'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Time
                    </label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />                    
                </div>
                <Button/>
            </form>
        )
    }
}

export default FormTask