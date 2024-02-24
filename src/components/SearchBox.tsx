
import { PlusCircle } from "@phosphor-icons/react/dist/ssr"
import styles from './SearchBox.module.css'

export function SearchBox(){
    return (
       <form className={styles.textarea}>
         <textarea placeholder='adicione uma nova tarefa'>

         </textarea>
         <button>Criar &nbsp; <PlusCircle size={19}/></button>
       </form>
    )

}

export default SearchBox

