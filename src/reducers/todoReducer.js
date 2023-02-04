import { localTodos } from "../data";


export const todoReducer = (state=localTodos, action)=>{
    switch(action.type){
        case 'todo/add':
            return [...state, 
                {
                    id: action.id,
                    description: action.description,
                    isCompleted: false
                }];
        case 'todo/toggle':
            return state.map(t=>{
                if(t.id!==action.id)
                    return t;
                return {
                    ...t,
                    isComplete: !t.isComplete
                }
            })
        default:
            return state;
    }
}