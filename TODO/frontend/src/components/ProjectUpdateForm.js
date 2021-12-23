import React from "react";
import {Link, useParams} from "react-router-dom";
import {withRouter} from "react-router";


class ProjectUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        console.log(props.projects)
        const working_project_id = this.props.match.params.id
        console.log(working_project_id)
        let working_project = props.projects.find(project => {
            return project.id == working_project_id
        })
        console.log(working_project)

        this.state = {
            name: working_project.name,
            git_link: working_project.git_link,
            working_group: working_project.working_group,
            id: working_project.id
        }
    }

    handleChange(event) {
        if (event.target.name === 'working_group') {
            let working_group = []
            for (let i = 0; i < event.target.selectedOptions.length; i++) {
                working_group.push(event.target.selectedOptions.item(i).value)

                this.setState(
                    {
                        [event.target.name]: working_group
                    }
                )
            }
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


        this.props.update_project(this.state.id, this.state.name, this.state.git_link, this.state.working_group)
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
                               value={this.state.git_link}
                               onChange={(event) => this.handleChange(event)}/>
                    </p>

                    <p>Working group<br/>
                        <select name="working_group"
                                multiple
                                defaultValue={this.state.working_group}
                                onChange={(event) => this.handleChange(event)}>
                            {this.props.users.map((item) =>
                                <option value={item.id}> {item.username}

                                </option>)}

                        </select>
                    </p>


                    <p><input type="submit" value="Update"/></p>

                </div>
            </form>

        )
    }


}

export default withRouter(ProjectUpdateForm);