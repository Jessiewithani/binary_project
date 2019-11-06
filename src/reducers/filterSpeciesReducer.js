export const filterSpeciesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FILTER_SPECIES':
            return action.species
        default:
            return state
    }
}