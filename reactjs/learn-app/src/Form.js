import React from 'react';
import axios from 'axios';


var uri = "http://api.github.com/users/maecapozzi";
var myUri = "http://localhost:2000/Accounts";
var localUri = "http://localhost:2000/";
var ServerUri = "http://45.32.190.35:2000"


export default class Form extends React.Component{
    state = {
        firstName: 'Wazzy',
        lastName: 'testdata',
        username: 'testdataa',
        email: 'testdataaaa',
        password: 'testdataaaaa',
    }

    

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.get(ServerUri)
    .then(response => this.setState({firstName : response.data.name}))
        axios.post(`${ServerUri}/Accounts`, {
            username : this.state.firstName,
            password : this.state.lastName,
            email : this.state.email
        });
    }

    

    
    render(){
        return(
            <form>         
               
                <input
                name='firstName'
                placeholder = 'First Name' value = {this.state.firstName}
                value = {this.state.firstName}
                onChange={e => this.change(e)}/>

                <button onClick={e => this.onSubmit(e)} >Send</button>
            </form>
        );
    }

}