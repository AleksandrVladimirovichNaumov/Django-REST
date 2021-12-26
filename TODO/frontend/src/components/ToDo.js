import React from "react";

const ToDoItem = ({todo, delete_todo}) => {
    let status = ''
    if (todo.isActive) {
        status = 'в работе'
    } else {
        status = 'завершен'
    }
    console.log(todo.project)
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.project}</td>
            <td>{todo.description}</td>
            <td>{todo.createDatetime}</td>
            <td>{todo.updateDatetime}</td>
            <td>{todo.createdBy}</td>
            <td>{todo.assignedTo}</td>
            <td>{status}</td>
            <td>
                <button onClick={() => delete_todo(todo.id)} type='button'>delete</button>
            </td>


        </tr>
    )
}

const ToDoList = ({todos, delete_todo}) => {

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
            <th>Delete</th>

            {todos.map((todo) => <ToDoItem todo={todo} delete_todo={delete_todo}/>)}

            <th>Name</th>
            <th>Project</th>
            <th>Description</th>
            <th>Create_datetime</th>
            <th>Update datetime</th>
            <th>Created by</th>
            <th>Assigned to</th>
            <th>Is active</th>
            <th>Delete</th>
        </table>
    )
}

export default ToDoList;