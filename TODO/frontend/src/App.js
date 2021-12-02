import React from 'react';
import './App.css';
import UserList from "./components/User";
import MenuList from "./components/Menu";
import FooterContent from "./components/Footer";
import axios from "axios";
import {BrowserRouter, HashRouter, Route, Router, Routes, Link} from "react-router-dom";
import ProjectList from "./components/Project";
import ToDoList from "./components/ToDo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'menu_items': [
                ['Users', '/'],
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
                console.log(response)
                const projects = response.data
                console.log(projects)

                this.setState(
                    {
                        'projects': projects
                    }
                )
            }
        ).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todos/').then(
            response => {
                console.log(response)
                const todos = response.data
                console.log(todos)
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
                <div className="div1">
                    <p>TODO:</p>
                </div>
                <div className="div2">
                    <span>
                        <BrowserRouter>
                            <MenuList menu_items={this.state.menu_items}/>
                        </BrowserRouter>

                    </span>
                </div>
                <div className="div3">
                    <span>
                        <BrowserRouter>


                                <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                                <Route exact path='/projects/'
                                       component={() => <ProjectList projects={this.state.projects}/>}/>
                                <Route exact path='/todos/' component={() => <ToDoList todos={this.state.todos}/>}/>

                        </BrowserRouter>
                    </span>

                </div>
                <div className="div4">
                    <FooterContent footer_items={this.state.footer_items}/>
                </div>
            </div>


        )
            ;
    }
}


export default App;

