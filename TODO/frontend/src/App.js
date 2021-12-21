import React from 'react';
import './App.css';
import UserList from "./components/User";
import MenuList from "./components/Menu";
import FooterContent from "./components/Footer";
import axios from "axios";
import {BrowserRouter, HashRouter, Route, Router, Routes, Link, Switch, Redirect} from "react-router-dom";
import ProjectList from "./components/Project";
import ToDoList from "./components/ToDo";
import NotFound from "./components/NotFound";
import ProjectDetailsList from "./components/ProjectDetails";
import LoginForm from "./components/LoginForm";
import Cookies from "universal-cookie/lib";
import ToDoForm from "./components/ToDoForm";
import ProjectForm from "./components/ProjectForm";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'menu_items': [
                ['Users', '/users'],
                ['Projects', '/projects'],
                ['ToDos', '/todos'],
                ['Create project', '/projects/create'],
                ['Create ToDo', '/todos/create'],
            ],
            'footer_items': ['TODO ltd.', '2021'],
            'projects': [],
            'todos': [],
            'token': '',
            'username': '',
            'todo_project': {}
        }
    }

    delete_project(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers}).then(
            response => {
                this.load_data();
            }
        ).catch(error => {
            console.log(error)
            this.setState({'projects': []})
        })
    }

    create_project(name, git_link, working_group) {
        const headers = this.get_headers()

        const data = {
            name: name,
            git_link: git_link,
            working_group: working_group,

        }


        axios.post(`http://127.0.0.1:8000/api/projects/`, data, {headers}).then(
            response => {
                this.load_data();
            }
        ).catch(error => {
            console.log(error)

        })

    }

    delete_todo(id) {
        const headers = this.get_headers()

        axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, {headers}).then(
            response => {
                this.load_data();
            }
        ).catch(error => {
            console.log(error)
            this.setState({'projects': []})
        })
    }


    create_todo(name, description, project, created_by, assigned_to) {
        const headers = this.get_headers()

        //  с добавленными в сериалайзере
        // project = ProjectModelSerializer()

        // не получается отправить пост запрос на создание todo? так как включена информация ввиде объекта project
        // я пытался отправлять запрос для получения объекта с инфой о проджекте и после получения ответа отправлять
        // пост запрос на создание туду с включенным объектом проекта. получаю ошибку, хотя структура data в пост запросе такая же
        // как и при гет запросе туду. почему - не смог разобраться. ниже код

        // axios.get('http://127.0.0.1:8000/api/projects/1', {headers}).then(
        //     response => {
        //         const project = response.data
        //         console.log(project)
        //         this.setState(
        //             {
        //                 'todo_project': project
        //             }
        //         )
        //
        //
        //         const data = {
        //             name: name,
        //             project: this.state.todo_project,
        //             description: description,
        //             // create_datetime: Date(),
        //             // update_datetime: Date(),
        //             created_by: 1,
        //             assigned_to: 1,
        //             is_active: true,
        //         }
        //         console.log(data)
        //
        //         axios.post(`http://127.0.0.1:8000/api/todos/`, data, {headers}).then(
        //             response => {
        //                 this.load_data();
        //             }
        //         ).catch(error => {
        //             console.log(error)
        //             this.setState({'projects': []})
        //         })
        //
        //
        //     })
        const data = {
            name: name,
            project: project,
            description: description,
            // create_datetime: Date(),
            // update_datetime: Date(),
            created_by: created_by,
            assigned_to: assigned_to,
            is_active: true,
        }


        axios.post(`http://127.0.0.1:8000/api/todos/`, data, {headers}).then(
            response => {
                this.load_data();
            }
        ).catch(error => {
            console.log(error)

        })

    }

    set_token(token) {
        const cookie = new Cookies()
        cookie.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    set_username(username) {
        const cookie = new Cookies()
        cookie.set('username', username)
        this.setState({'username': username}, () => this.load_data())
    }

    is_auth() {
        return !!this.state.token
    }

    logout() {
        this.set_token('')
        this.set_username('')


    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(
            response => {
                const users = response.data

                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => {
            console.log(error)
            this.setState({'users': []})
        })
        axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(
            response => {

                const projects = response.data


                this.setState(
                    {
                        'projects': projects
                    }
                )
            }
        ).catch(error => {
            console.log(error);
            this.setState({'projects': []})
        })
        axios.get('http://127.0.0.1:8000/api/todos/', {headers}).then(
            response => {

                const todos = response.data

                this.setState(
                    {
                        'todos': todos
                    }
                )
            }
        ).catch(error => {
            console.log(error);
            this.setState({'todos': []})
        })
    }

    get_token_from_storage() {
        const cookie = new Cookies()
        let token = cookie.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_username_from_storage() {
        const cookie = new Cookies()
        let username = cookie.get('username')
        this.setState({'username': username}, () => this.load_data())
    }

    get_token(username, password) {

        this.setState({'username': username}, () => this.load_data())
        let data;
        data = {
            username: username,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(
            response => {
                this.set_token(response.data['token'])
                this.set_username(username)

            }
        ).catch(error => alert(error))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.get_username_from_storage()


    }

    render() {
        return (

            <div className="parent">
                <BrowserRouter>
                    <div className="div1">
                        <p>TODO:</p>
                    </div>
                    <div className="div2">
                        <span>
                            {this.is_auth()
                                ? <p>
                                    {this.state.username}<br/>
                                    <button onClick={() => this.logout()}>Logout</button>
                                </p>
                                : <p><Link to='/login'>Login</Link></p>}
                            <br/>
                            <MenuList menu_items={this.state.menu_items}/>


                        </span>
                    </div>
                    <div className="div3">
                        <span>


                            <Switch>
                                <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>


                                <Route exact path='/projects'
                                       component={() => <ProjectList projects={this.state.projects}
                                                                     delete_project={(id) => this.delete_project(id)}/>}/>

                                <Route exact path='/projects/create' component={() =>
                                    <ProjectForm
                                        projects={this.state.projects}
                                        users={this.state.users}
                                        create_project={(name, git_link, working_group) => this.create_project(name, git_link, working_group)}/>}/>

                                <Route path='/projects/details/:id'>
                                    <ProjectDetailsList projects={this.state.projects}/>
                                </Route>



                                <Route exact path='/todos'
                                       component={() => <ToDoList todos={this.state.todos}
                                                                  delete_todo={(id) => this.delete_todo(id)}/>}/>

                                <Route exact path='/todos/create' component={() =>
                                    <ToDoForm
                                        projects={this.state.projects}
                                        users={this.state.users}
                                        create_todo={(name, description, project, created_by, assigned_to) => this.create_todo(name, description, project, created_by, assigned_to)}/>}/>


                                {!this.is_auth()
                                    ? <Route exact path='/login' component={() => <LoginForm
                                        get_token={(username, password) => this.get_token(username, password)}/>}/>
                                    :
                                    <div className="div2"><span> You are logged as {this.state['username']}</span></div>
                                }

                                <Redirect from='/' to='/users'/>

                                <Route component={NotFound}/>
                            </Switch>

                                    </span>

                    </div>
                    <div className="div4">
                        <FooterContent footer_items={this.state.footer_items}/>
                    </div>
                </BrowserRouter>
            </div>


        )
            ;
    }
}


export default App;

