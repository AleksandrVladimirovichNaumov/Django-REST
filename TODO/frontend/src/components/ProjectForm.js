import React from "react";
import {Link} from "react-router-dom";

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            git_link: '',
            working_group: [],
        }
    }

    handleChange(event) {
        if (event.target.name === 'working_group') {
            let value = this.state.working_group
            value.push(event.target.value)
            this.setState(
                {
                    [event.target.name]: value
                }
            )
        } else {
            this.setState(
                {
                    [event.target.name]: event.target.value
                }
            )
        }
        console.log(event.target.name)
        console.log(event.target.value)

    }

    handleSubmit(event) {
        // this.state.create_datetime = Date()
        // this.state.update_datetime = Date()
        console.log(this.state.name)
        console.log(this.state.git_link)
        console.log(this.state.working_group)


        this.props.create_project(this.state.name, this.state.git_link, this.state.working_group)
        event.preventDefault()
    }

    render() {
        return (

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="div2">
                    <p>Create new Project:</p>

                    <p>Todo Name<br/>
                        <input type="text" name="name" placeholder="ToDo name" value={this.state.name}
                               onChange={(event) => this.handleChange(event)}/>
                    </p>

                    <p>Git link<br/>
                        <input type="text" name="git_link"
                               placeholder="Git link"
                               value={this.state.description}
                               onChange={(event) => this.handleChange(event)}/>
                    </p>

                    <p>Working group<br/>
                        <select name="working_group"


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

export default ProjectForm