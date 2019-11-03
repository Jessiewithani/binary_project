export const locationsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SAVE_LOCATIONS':
            return [...state, action.characters]
        default:
            return state
    }
}