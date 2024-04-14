
import {v4 as uuidv4} from 'uuid'
import { PlusCircle, Notebook } from "@phosphor-icons/react/dist/ssr"
import styles from './SearchBox.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"
import TaskList  from "./TaskList"
import { Check } from '@phosphor-icons/react'


export function SearchBox(){

const [tasks, setTasks] = useState([{
  id: uuidv4(),
  content: 'primeira task',
  check: true
},
{
  id: uuidv4(),
  content: 'primeira task',
  check: true
}])
const [newTask, setNewTask] = useState('')

function handleCreateNewTask(event: FormEvent){
  event.preventDefault()

  setTasks([...tasks, newTask])
  setNewTask('')
}

function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity('');
  setNewTask(event.target.value)
}

function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity('Esse campo é obrigatório')
}

function onDeleteTask(taskToDelete: number){
  const tasksWithoutDeletedOne = tasks.filter(task => {
    return task !== taskToDelete;
  })

  setTasks(tasksWithoutDeletedOne);
}

function onCheckTask(taskToCheck: boolean){
  const check = tasks.filter(task => {
    task 
  } )
}

    return (
      <div>
       <form onSubmit={handleCreateNewTask} className={styles.textarea}>
         <textarea name="task"
         placeholder='adicione uma nova tarefa'
         onChange={handleNewTaskChange}
         onInvalid={handleNewTaskInvalid}
         required
         value={newTask}         
         >

         </textarea>
         <button type="submit">Criar &nbsp; <PlusCircle size={19}/></button>
       </form>

        <div className={styles.body}>
            <header className={styles.header}>
                <p>Tarefas criadas <span>{tasks.length}</span></p>         
                <p>Concluidas <span>0 de 5</span></p>
            </header>
             
            <main>
            {tasks.length === 0 ? (
                    <div className={styles.tasklist}>
                    <Notebook size={40} className={styles.figure}/>
                    <p>Você não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>)
                 : (
                    tasks.map(task => {
                      return (
                        <div className={styles.taskListCard}> 
                        <TaskList key={task.id} 
                        content={task.content} 
                        check={task.check} 
                        onDeleteTask={(task: number) => onDeleteTask(task)}
                        onCheckTask={(task: boolean) => onCheckTask(task)}
                        />
                        </div>
                      )
                    }
                      
                      
                    )
                 )
                 }    
            </main>
           
                
        </div>  

       
       </div>
    )

}

export default SearchBox

