
import { createStore, combineReducers } from 'redux'

/*

state = {
    "Nag":{up:0,down:0},
    "Hemanth":{up:0,down:0},
}

*/

const voteReducer = (state = {}, action) => {
    let { type } = action;
    switch (type) {
        case 'UP_VOTE': {
            let { person } = action;
            let vote = state[person] || {}
            vote = { ...vote, up: (vote.up ? vote.up : 0) + 1 };
            return { ...state, [person]: vote };
        }
        case 'DOWN_VOTE': {
            let { person } = action;
            let vote = state[person] || {}
            vote = { ...vote, down: (vote.down ? vote.down : 0) + 1 };
            return { ...state, [person]: vote };
        }
        case 'CLEAR': {

        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    vote: voteReducer
})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;