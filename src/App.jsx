import { useState } from 'react'
import './App.css'
import { AddTask } from './componentes/AddTask' 
import { ShowTasks } from './componentes/ShowTasks'

function App() {
  const [tasks,setTasks] = useState([])

  const addTask = (newTask)=>{
    let object = {
      task: newTask,
      status: false
    }
    setTasks([...tasks,object])   
  }
  const changeStatus = (indice)=>{
    tasks[indice].status = !tasks[indice].status
    setTasks([...tasks])
  }

  const removeTasks = (indice)=>{
    tasks.splice(indice,1)
    setTasks([...tasks])
  }


  return (
    <>
    <h1>Administrador de tareas </h1>
      <AddTask addTask={addTask}/> 
      <ShowTasks tasksList={tasks} changeStatus={changeStatus} removeTasks={removeTasks}/>
    </>
  )
}

export default App
