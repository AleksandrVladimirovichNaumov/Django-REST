import React from "react";

const ToDoItem = ({todo}) => {
    console.log(todo.isActive)
    let status = ''
    if (todo.isActive){status='в работе'} else {status='завершен'}
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.project.name}</td>
            <td>{todo.description}</td>
            <td>{todo.createDatetime}</td>
            <td>{todo.updateDatetime}</td>
            <td>{todo.createdBy.username}</td>
            <td>{todo.assignedTo.username}</td>
            <td>{status}</td>


        </tr>
    )
}

const ToDoList = ({todos}) => {

    return (
        <table>
            <th>Name</th>
            <th>Project</th>
            <th>Description</th>
            <th>Create_datetime</th>
            <th>Update datetime</th>
            <th>Created by</th>
            <th>Assigned to</th>
            <th>Is active</th>

            {todos.map((todo) => <ToDoItem todo={todo}/>)}

            <th>Name</th>
            <th>Project</th>
            <th>Description</th>
            <th>Create_datetime</th>
            <th>Update datetime</th>
            <th>Created by</th>
            <th>Assigned to</th>
            <th>Is active</th>
        </table>
    )
}

export default ToDoList;