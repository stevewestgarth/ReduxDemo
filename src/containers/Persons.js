import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../store/actions'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import Modal from '../components/UI/Modal/Modal';

class Persons extends Component {

    state = {

        addingPerson:false

    }
 

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        }

        this.props.onAddPersonHandler(newPerson);
        this.cancelAdd();
    }

    personDeletedHandler = (personId) => {

        this.props.onDeletePersonHandler(personId);
    }

    cancelAdd = () =>
      {
        this.setState({addingPerson:false})
      }

      startAdd = () =>
      {
        this.setState({addingPerson:true})
      }

    render () {
        return (
            <div>

                <Modal modalClosed={this.cancelAdd} show={this.state.addingPerson}><AddPerson personAdded={this.personAddedHandler} /></Modal>

                <button onClick={() => this.startAdd()}>Add Person</button>

                {this.props.person.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        person: state.persons
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        onAddPersonHandler: (newPerson) => dispatch({type: actions.ADD, payload: newPerson}),
        onDeletePersonHandler: (personId) => dispatch({type: actions.DELETE, personId: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);