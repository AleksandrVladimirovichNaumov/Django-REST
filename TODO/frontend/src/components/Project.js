import React from "react";

const ProjectItem = ({project}) => {

    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.git_link}</td>


        </tr>
    )
}

const ProjectList = ({projects}) => {

    return (
        <table>
            <th>Name</th>
            <th>Git link</th>


            {projects.map((project) => <ProjectItem project={project}/>)}

            <th>Name</th>
            <th>Git link</th>

        </table>
    )
}

export default ProjectList;