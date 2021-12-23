import React from "react";
import {Link} from "react-router-dom";

let input_text = ''

class ProjectSearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {

        input_text = event.target.value
        this.setState(
            {'project_name': input_text}
        )
        console.log(input_text)
    }

    handleSubmit(event) {
        console.log(input_text)
        console.log(this.props)
        // this.props.project_search(input_text)
        // this.props.create_todo(this.state.project_name)
        event.preventDefault()
    }
}

let project_search_form = new ProjectSearchForm()


const ProjectItem = ({project, delete_project}) => {

    return (
        <tr>
            <td>
                <Link to={`/projects/update/${project.id}`}>{project.name}</Link>
            </td>
            <td>{project.git_link}</td>
            <td>
                <Link to={`/projects/details/${project.id}`}> {project.working_group.length} member(s)</Link>
            </td>
            <td>
                <button onClick={() => delete_project(project.id)} type='button'>delete</button>
            </td>


        </tr>
    )
}

const ProjectList = ({projects, delete_project, project_search}) => {

    return (

        <p>
            <form onSubmit={(event) => project_search_form.handleSubmit(event)}>
                <input type="text" name="project_name"
                       placeholder="project name"
                    // value={input_text}
                       onChange={(event) => project_search_form.handleChange(event)}
                />
                <button onClick={() => project_search(input_text)} type='button'>search</button>
                {/*<input type="submit" value="Search project by name"/>*/}
            </form>


            <table>
                <th>Name</th>
                <th>Git link</th>
                <th>Members of working group</th>
                <th>Delete</th>


                {projects.map((project) => <ProjectItem project={project} delete_project={delete_project}/>)}

                <th>Name</th>
                <th>Git link</th>
                <th>Members of working group</th>
                <th>Delete</th>


            </table>
        </p>
    )
}

export default ProjectList;