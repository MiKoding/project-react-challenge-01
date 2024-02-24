import { Notebook } from "@phosphor-icons/react"
import styles from "./Task.module.css"
export function Task(){
    return (
        <div>
            <header className={styles.header}>
                <p>Tarefas criadas</p>         
                <p>Tarefas concluidas</p>
            </header>
            <div>
                <Notebook size={16}/>
                <p>você não tem tarefas cadastradas</p>
                <p>crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>

        
        )
    
}

export default Task