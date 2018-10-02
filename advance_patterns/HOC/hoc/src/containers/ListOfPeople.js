import React, { Component } from 'react';
import Person from '../components/Person';

class ListOfPeople extends Component {

    state = {
        persons: [
            {
                name: 'Ivan',
                age: 23,
            },
            {
                name: 'Petar',
                age: 28,
            }, {
                name: 'Vlado',
                age: 33,
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person key={index}{...person}></Person>
                })}
                <p>Load time:</p>

            </div>
        )
    }
}

export default ListOfPeople;