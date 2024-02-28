import  Header  from './components/Header'
import Task from './components/Task'
import TaskList from './components/TaskList'

const post = [
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
import "./global.css"
function App() {
  return (
    <div>
      <Header/>
      <Task/>
    </div>
    
  )
}

export default App
