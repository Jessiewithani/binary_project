export const favoritesReducer = (state = [], action ) => {
    switch(action.type) {
        case 'SAVE_FAVORITES':
            return action.favorites;
        case 'REMOVE_FAVORITES':
            default:
                return state
    }
}