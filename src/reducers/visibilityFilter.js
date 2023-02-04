const visibilityFilter = (state='SHOW_ALL', action)=>{
    switch(action.type){
        case 'filters/SET_FILTERS':
            return action.filter;
        default: 
            return state;
    }
}

export default visibilityFilter;