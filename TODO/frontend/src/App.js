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


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'menu_items': [
                ['Users', '/users'],
                ['Projects', '/projects'],
                ['ToDos', '/todos'],
            ],
            'footer_items': ['TODO ltd.', '2021'],
            'projects': [],
            'todos': [],
            'token': '',
            'username': ''
        }
    }

    set_token(token) {
        const cookie = new Cookies()
        cookie.set('token', token)
        this.setState({'token': token})
    }

    is_auth() {
        return !!this.state.token
    }

    logout() {
        this.set_token('')
        this.setState({'username':''})
    }

    load_data() {
        axios.get('http://127.0.0.1:8000/api/users/').then(
            response => {
                const users = response.data

                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/projects/').then(
            response => {

                const projects = response.data


                this.setState(
                    {
                        'projects': projects
                    }
                )
            }
        ).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todos/').then(
            response => {

                const todos = response.data

                this.setState(
                    {
                        'todos': todos
                    }
                )
            }
        ).catch(error => console.log(error))
    }

    get_token_from_storage() {
        const cookie = new Cookies()
        let token = cookie.get('token')
        this.setState({'token': token})
    }

    get_token(username, password) {

        this.setState({'username':username})
        let data;
        data = {
            username: username,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(
            response => {
                this.set_token(response.data['token'])
                console.log(response.data)

            }
        ).catch(error => alert(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()

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

                            <MenuList menu_items={this.state.menu_items}/>
                            {this.is_auth()
                                ? <p>
                                    <button onClick={() => this.logout()}>Logout</button>
                                </p>
                                : <p><Link to='/login'>Login</Link></p>}

                        </span>
                    </div>
                    <div className="div3">
                        <span>


                            <Switch>
                                <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                                <Route exact path='/projects'
                                       component={() => <ProjectList projects={this.state.projects}/>}/>
                                <Route exact path='/todos' component={() => <ToDoList todos={this.state.todos}/>}/>
                                {!this.is_auth()
                                ? <Route exact path='/login' component={() => <LoginForm
                                    get_token={(username, password) => this.get_token(username, password)}/>}/>
                                    : <div className="div2"><span> You are logged as {this.state['username']}</span></div>
                                }
                                {/*<Route exact path='/login' component={() => <LoginForm*/}
                                {/*    get_token={(username, password) => this.get_token(username, password)}/>}/>*/}
                                <Route path='/projects/details/:id'>
                                    <ProjectDetailsList projects={this.state.projects}/>
                                </Route>


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

