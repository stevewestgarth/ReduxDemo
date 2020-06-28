import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {


    state = {
        name: '',
        age: 0,
    }

    onNameChangedHandler = (event) =>
    {
        this.setState({name: event.target.value});
    }

    onAgeChangedHandler = (event) =>
    {
        this.setState({age: event.target.value});
    }

    personAddedHandler = () => {
        this.setState({name: ''});
        this.setState({age: 0});
        this.props.personAdded(this.state.name,this.state.age)   
    }

    render()
    {
        return (

            <div className="AddPerson">
            <h1>Add Person</h1>
            <p><span className="label">Name</span><input type='text' name='name' placeholder="Enter Name" onChange={this.onNameChangedHandler} value={this.state.name}/></p>
            <p><span className="label">Age</span><input type='number' name='age'  placeholder="Enter Age" onChange={this.onAgeChangedHandler} value={this.state.age}/></p>
            <button onClick={() => this.personAddedHandler()}>Add Person</button>
        </div>
        )
    }

}

export default AddPerson;