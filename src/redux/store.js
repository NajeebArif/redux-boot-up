import { legacy_createStore as createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state;
    }
}

export const store = createStore(counterReducer);
store.subscribe(() => console.log('Value', store.getState().value))