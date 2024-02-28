import { CheckCircle, RadioButton, Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
interface TaskListProps{
    content: string,
    check: boolean

}
export function TaskList({content,check}: TaskListProps){
    return(
        <div className={styles.body}>
            <button className={styles.check}>
            <RadioButton size={30}/>
            </button>
            <p></p>
            <button className= {styles.trash}>
            <Trash size={25}/>
            </button>
        </div>
    )
}

export default TaskList