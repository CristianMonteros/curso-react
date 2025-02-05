import { useRef } from "react"

export const AddTask = () => {
    const inputRef = useRef()
    
    return <>
    <input ref={inputRef} type="text" placeholder="Ingrese la tarea" />
    <button onClick={()=> {console.log(inputRef.current.value)}}>Agregar</button>
    </>

} 