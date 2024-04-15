
import {v4 as uuidv4} from 'uuid'
import { PlusCircle, Notebook } from "@phosphor-icons/react/dist/ssr"
import styles from './SearchBox.module.css'
import { useState } from "react"
import TaskList  from "./TaskList"
export interface ITask{
  id:string,
  text: string,
  check: boolean
}

export function SearchBox(){

const [tasks, setTasks] = useState<ITask[]>([])
const [newTask, setNewTask] = useState('')

const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => { //contagem de task verdadeiras ou falsas
  if (currentTask.check) {
    return prevValue + 1
  }

  return prevValue
}, 0)
function sortValues(){
  const updateTask = tasks.sort((valueA,valueB) => {
    // Ordenar verdadeiros antes de falsos
    if (valueA.check === valueB.check) {
        // Se os valores são iguais, manter a ordem original
        return 0;
    } else if (valueA.check) {
        // Se a.valor é verdadeiro e b.valor é falso, a vem primeiro
        return -1;
    } else {
        // Se a.valor é falso e b.valor é verdadeiro, b vem primeiro
        return 1;
    }
})
  console.log(tasks)
  setTasks(updateTask)
}

function handleCreateNewTask(){ //cria nova task 
  if (!newTask){
    return 
  }

  const newTaskValue: ITask = {
      id: uuidv4(),
      text: newTask,
      check: false,
    }

  setTasks((state) => [newTaskValue, ...state].sort())
  setNewTask('')
}

function handleDeleteTask(id: string){
  const filteredTasks = tasks.filter((task) => task.id !== id)
  if(!confirm('Deseja deletar essa tarefa?')){
    return
  }

  setTasks(filteredTasks)
}

function handleCheckTask({id, value}:{id:string, value:boolean}){
  const updatedTasks = tasks.map((task)=> {
    if(task.id === id){
      return {...task, check: value}
    }
    return {...task}
  })

  setTasks(updatedTasks.sort())
}

    return (
      <div>
       <form  className={styles.textarea}>
         <textarea name="task"
         placeholder='adicione uma nova tarefa'
         onChange={(e) => setNewTask(e.target.value)}
         required
         value={newTask}         
         >

         </textarea>
         <button onClick={handleCreateNewTask}>Criar &nbsp; <PlusCircle size={19}/></button>
       </form>

        <div className={styles.body}>
            <header className={styles.header}>
                <p>Tarefas criadas <span>{tasks.length}</span></p>         
                <p>Concluidas <span>{checkedTasksCounter} de {tasks.length}</span></p>
            </header>
             
            <main>
            {tasks.length > 0 ? (
                  tasks.map(task => {
                    return (
                      <div className={styles.taskListCard}> 
                      <TaskList key={task.id} 
                      data= {task}
                      handleDeleteTask={handleDeleteTask}
                      handleCheckTask={handleCheckTask}
                      />
                      </div>
                    )
                  } 
                  )
                  )
                 : (
                  <div className={styles.tasklist}>
                  <Notebook size={40} className={styles.figure}/>
                  <p>Você não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                 )
                 }    
            </main>
           
                
        </div>  

       
       </div>
    )

}

export default SearchBox

