import {Link, useParams} from "react-router-dom";
import ProjectList from "./Project";


const ProjectItem = ({user}) => {
    console.log(user)

    let   working_group=
            <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>


            </tr>


    return (
        working_group
    )
}


const ProjectDetailsList = ({projects, users}) => {

    let {id} = useParams();
    let working_group = [];
    console.log(projects)

    let filtered_items = projects.filter(project => project.id == id);
    console.log(filtered_items)
    for (let i=0; i<filtered_items[0].working_group.length; i++){
        working_group.push(users.filter(user => user.id==filtered_items[0].working_group[i])[0])
    }

    console.log(working_group);
    return (
        <table>
            <th>Username</th>
            <th>Email</th>


            {working_group.map((user) => <ProjectItem user = {user}/>)}

            <th>Username</th>
            <th>Email</th>

        </table>
    )


}

export default ProjectDetailsList;