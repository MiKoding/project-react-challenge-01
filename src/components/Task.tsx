import { Notebook } from "@phosphor-icons/react"
import styles from "./Task.module.css"
export function Task(){
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <p>Tarefas criadas <span>0</span></p>         
                <p>Concluidas <span>0</span></p>
            </header>
            <div className={styles.tasklist}>
                <Notebook size={40} className={styles.figure}/>
                <p>Você não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>

        
        )
    
}

export default Task