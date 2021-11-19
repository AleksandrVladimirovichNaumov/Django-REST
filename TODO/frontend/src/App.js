import React from 'react';
import './App.css';
import UserList from "./components/User";
import MenuList from "./components/Menu";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'menu_items': [
                'option 1',
                'option 2',
                'option 3',
            ]
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
        // const users = [
        //     {
        //         'username': 'Alex',
        //         'first_name': 'Alexander',
        //         'last_name': 'Naumov',
        //         'email': 'AlexanderNaumov@TODO.com'
        //     }
        // ]
        // this.setState(
        //     {
        //         'users':users
        //     }
        // )
    }

    render() {
        return (

            <div className="parent">
                <div className="div1">
                    <p>TODO: list of users</p>
                </div>
                <div className="div2">
                    <span>
                        <MenuList menu_items={this.state.menu_items}/>


                    </span>
                </div>
                <div className="div3">
                    <span>
                        <UserList users={this.state.users}/>
                    </span>

                </div>
                <div className="div4">
                    <p>TODO ltd.</p>
                </div>
            </div>


        )
            ;
    }
}

export default App;

