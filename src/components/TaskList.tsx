import { CheckCircle, RadioButton, Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
interface TaskListProps{
    id: number
    content: string,
    check: boolean,
    onDeleteTask: (id: number) => number;
    onCheckTask: (check: boolean) => void;
}
export function TaskList({id,content,check, onDeleteTask, onCheckTask}: TaskListProps){
    function handleDeleteTask(){
        onDeleteTask(id);
    }

    function handleCheckOrUncheck(){
        if(check == true){
            onCheckTask(false);
        }else{
            onCheckTask(true)
        }
    }

    return(
        <div className={styles.body}>
            <button className={styles.check}>
            {check === false ? <RadioButton size={30} onClick={handleCheckOrUncheck}/> : <CheckCircle size={30} onClick={handleCheckOrUncheck}/>}
            </button>
            <p>{content}</p>
            <button onClick={handleDeleteTask} className= {styles.trash}>
            <Trash size={25}/>
            </button>
        </div>
    )
}

export default TaskList