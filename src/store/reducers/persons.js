import * as actions from '../actions'

const initialState = {
    persons: []
}

const personReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actions.ADD:
            return {
                ...state,
                persons: state.persons.concat(action.payload)
            };
            case actions.DELETE:

                const updatedPersons = state.persons.filter(person => person.id !== action.personId)

                return {
                    ...state,
                    persons: updatedPersons
                };
        default:
            return state;
    }

}

export default personReducer;