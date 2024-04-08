
import { PlusCircle, Notebook } from "@phosphor-icons/react/dist/ssr"
import styles from './SearchBox.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"
import TaskList  from "./TaskList"


export function SearchBox(){

const [tasks, setTasks] = useState(['pqp vai ficar provisório essa merda'])
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

function onDeleteTask(task){
  console.log(`Deletar task ${task}`)
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
                        <div className={styles.taskListCard}> <TaskList key={task} content={task} check={true} onDeleteTask={task} /> </div>
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

