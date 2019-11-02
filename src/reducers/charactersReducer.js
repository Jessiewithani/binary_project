export const charactersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SAVE_CHARACTERS':
            return [...state, action.characters]
        default:
            return state
    }
}