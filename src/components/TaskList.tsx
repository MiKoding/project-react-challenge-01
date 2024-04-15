import { CheckCircle, RadioButton, Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'
import { ITask } from './SearchBox';
interface TaskListProps{
    data: ITask
    handleDeleteTask: (id: string) => void;
    handleCheckTask: ({id,value}: {id: string; value:boolean}) => void ;
}
export function TaskList({data,handleDeleteTask, handleCheckTask}: TaskListProps){
    function handleRemove(){
        handleDeleteTask(data.id);
    }

    function handleCheckOrUncheck(){
       handleCheckTask({id: data.id, value: !data.check})
    }
    
    const paragraphCheckedClassname = data.check
    ? styles['paragraph-checked']
    : ''

    return(
        <div className={styles.body}>
            <button className={styles.check}>
            {data.check === false ? <RadioButton size={30} onClick={handleCheckOrUncheck}/> : <CheckCircle size={30} onClick={handleCheckOrUncheck}/>}
            </button>
            <p className={`${paragraphCheckedClassname}`}>{data.text}</p>
            <button onClick={handleRemove} className= {styles.trash}>
            <Trash size={25}/>
            </button>
        </div>
    )
}

export default TaskList