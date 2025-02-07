export const ShowTasks = ({ tasksList, changeStatus, removeTasks }) => {

return <>
        <table>
            <thead>
                <tr>
                    <th>Tareas</th>
                    <th>Estados</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {tasksList.map((e, i) => {
            
                    return <tr key={i}>
                        <td>{e.task}</td>
                        <td>{e.status ? "Completado" : "No completado"}</td>
                        <td>
                            <button onClick={() => { removeTasks(i) }}>Eliminar</button>
                            <button onClick={() =>{ changeStatus(i) }}>Completar</button>
                        </td>
                    </tr>

                })}
            </tbody>
        </table>

    </>

}