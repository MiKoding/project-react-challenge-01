import { Notebook } from "@phosphor-icons/react"
import styles from "./Task.module.css"
import TaskList from "./TaskList"
export function Task(){
    const taskList = [
        {
          id: 1,
          content: 'esta task list não deve ser exibida',
          check: 0
        },
        {
          id:2,
          content: 'esta task list deve ser exibida',
          check: 1
        }
      ]
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <p>Tarefas criadas <span>0</span></p>         
                <p>Concluidas <span>0 de 5</span></p>
            </header>
            <div className={styles.tasklist}>
                <Notebook size={40} className={styles.figure}/>
                <p>Você não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
                <TaskList
                key={taskList.id}
                />
        </div>       
        )
    
}

export default Task