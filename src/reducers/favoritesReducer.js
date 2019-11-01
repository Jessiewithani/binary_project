export const favoritesReducer = (state = [], action ) => {
    switch(action.type) {
        case 'SAVE_CHARACTERS':
            return action.favorites;
        case 'REMOVE_FAVORITES':
            default:
                return state
    }
}