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
            'todos': []
        }
    }

    componentDidMount() {
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


                    </span>
                    </div>
                    <div className="div3">
                    <span>


                            <Switch>
                                <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                                <Route exact path='/projects'
                                       component={() => <ProjectList projects={this.state.projects}/>}/>
                                <Route exact path='/todos' component={() => <ToDoList todos={this.state.todos}/>}/>
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

