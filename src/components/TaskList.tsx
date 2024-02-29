import { CheckCircle, RadioButton, Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'

export interface TaskType{
    content: string,
    check: boolean
}

export function TaskList({content, check}: TaskType){
    return(
        <div className={styles.body}>
            <button className={styles.check}>
            {check == false && <RadioButton size={30}/>}
            {check == true && <CheckCircle size={30}/>}
            </button>
            <p>{content}</p>
            <button className= {styles.trash}>
            <Trash size={25}/>
            </button>
        </div>
    )
}

export default TaskList