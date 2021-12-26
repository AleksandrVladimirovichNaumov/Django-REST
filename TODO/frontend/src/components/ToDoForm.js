import React from "react";
import {Link} from "react-router-dom";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            project: 2,
            description: '',
            created_by: 1,
            assigned_to: 1,
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        console.log(event.target.value)
    }

    handleSubmit(event) {
        // this.state.create_datetime = Date()
        // this.state.update_datetime = Date()
        this.props.create_todo(this.state.name, this.state.description, this.state.project, this.state.created_by, this.state.assigned_to)
        event.preventDefault()
    }

    render() {
        return (

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="div2">
                    <p>Create new Todo:</p>

                    <p>Todo Name<br/>
                        <input type="text" name="name" placeholder="ToDo name" value={this.state.name}
                               onChange={(event) => this.handleChange(event)}/>
                    </p>

                    <p>Description<br/>
                        <input type="text" name="description"
                               placeholder="Description"
                               value={this.state.description}
                               onChange={(event) => this.handleChange(event)}/>
                    </p>

                    <p>Project<br/>
                        <select name="project"


                                onChange={(event) => this.handleChange(event)}>
                            {this.props.projects.map((item) =>
                                <option value={item.id}> {item.name}

                                </option>)}
                        </select>
                    </p>

                    <p>Assigned to<br/>
                        <select name="assigned_to"


                                onChange={(event) => this.handleChange(event)}>
                            {this.props.users.map((item) =>
                                <option value={item.id}> {item.username}

                                </option>)}
                            {console.log(this.props.users               )}

                        </select>
                    </p>

                    <p>Created by<br/>
                        <select name="created_by"


                                onChange={(event) => this.handleChange(event)}>
                            {this.props.users.map((item) =>
                                <option value={item.id}> {item.username}

                                </option>)}

                        </select>
                    </p>


                    <p><input type="submit" value="Save"/></p>

                </div>
            </form>

        )
    }


}

export default ToDoForm