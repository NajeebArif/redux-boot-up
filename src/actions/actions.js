import { v4 as uuidv4 } from 'uuid';

export const addTodo = (description) =>{
    return {
        type: 'todo/add',
        id: uuidv4(),
        description,
        isCompleted: false
    };
}

export const toggleTodo = (id) =>{
    return {
        type: 'todo/toggle',
        id
    }
}

export const setVisibilityFilter = (filter) =>{
    return {
        type: 'filters/SET_FILTERS',
        filter
    }
}