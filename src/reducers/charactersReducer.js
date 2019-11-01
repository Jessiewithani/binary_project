export const charactersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SAVE_CHARACTERS':
            return action.characters
        default:
            return state
    }
}