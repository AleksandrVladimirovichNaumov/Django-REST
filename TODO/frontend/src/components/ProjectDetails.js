import {Link, useParams} from "react-router-dom";
import ProjectList from "./Project";


const ProjectItem = ({project}) => {
    console.log(project.working_group)
    let working_group = []
    for (let i = 0; i < project.working_group.length; i++) {
        working_group.push(
            <tr>
                <td>{project.working_group[i].username}</td>
                <td>{project.working_group[i].email}</td>


            </tr>
        )
    }
    return (
        working_group
    )
}


const ProjectDetailsList = ({projects}) => {

    let {id} = useParams();

    let filtered_items = projects.filter(project => project.id == id);
    console.log(filtered_items);
    return (
        <table>
            <th>Username</th>
            <th>Email</th>


            {filtered_items.map((project) => <ProjectItem project={project}/>)}

            <th>Username</th>
            <th>Email</th>

        </table>
    )


}

export default ProjectDetailsList;