import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({project, delete_project}) => {

    return (
        <tr>
            <td>{project.name}</td>
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

const ProjectList = ({projects, delete_project}) => {

    return (
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
    )
}

export default ProjectList;