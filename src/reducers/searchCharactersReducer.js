export const searchCharactersReducer = (state = '', action) => {
    switch(action.type) {
        case 'SEARCH_CHARACTERS':
            return action.name
        default:
            return state
    }
}

//submit handle in NAV --> dispatch action to filter in the store
//mapStateToProps which is going to be the search value
//it container do condition.... 

