import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({project}) => {

    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.git_link}</td>
            <td>
                <Link to={`/projects/details/${project.id}`}> {project.working_group.length} member(s)</Link>
            </td>


        </tr>
    )
}

const ProjectList = ({projects}) => {

    return (
        <table>
            <th>Name</th>
            <th>Git link</th>
            <th>Members of working group</th>


            {projects.map((project) => <ProjectItem project={project}/>)}

            <th>Name</th>
            <th>Git link</th>
            <th>Members of working group</th>

        </table>
    )
}

export default ProjectList;