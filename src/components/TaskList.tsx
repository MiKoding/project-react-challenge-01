import { CheckCircle, RadioButton, Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
interface TaskListProps{
    content: string,
    check: boolean,
    onDeleteTask: (content: string) => void;
}
export function TaskList({content,check, onDeleteTask}: TaskListProps){
    function handleDeleteTask(){
        onDeleteTask(content);
    }

    return(
        <div className={styles.body}>
            <button className={styles.check}>
            {check === false ? <RadioButton size={30} /> : <CheckCircle size={30} />}
            </button>
            <p>{content}</p>
            <button onClick={handleDeleteTask} className= {styles.trash}>
            <Trash size={25}/>
            </button>
        </div>
    )
}

export default TaskList