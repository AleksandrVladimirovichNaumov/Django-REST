import React from 'react';
import './App.css';
import UserList from "./components/User";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            'users':[]
        }
    }

    componentDidMount() {
        const users = [
            {
                'username': 'Alex',
                'first_name': 'Alexander',
                'last_name': 'Naumov',
                'email': 'AlexanderNaumov@TODO.com'
            }
        ]
        this.setState(
            {
                'users':users
            }
        )
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
