import React from 'react';
import './App.css';
import UserList from "./components/User";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(
            response => {
                const users = response.data
                console.log(users)
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
            <div className="App">
                <header className="App-header">
                    List of users
                </header>

                <div className="App-content">
                    <UserList users={this.state.users}/>
                </div>
                <footer>
                    <p>TODO application</p>
                </footer>
            </div>

        )
            ;
    }
}

export default App;
