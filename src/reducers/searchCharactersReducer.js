export const searchCharactersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SEARCH_CHARACTERS':
            return action.name
        default:
            return state
    }
}