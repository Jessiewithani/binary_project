export const saveCharacters = (characters) => ({
    type: 'SAVE_CHARACTERS',
    characters
})

export const searchCharacter = (name) => ({
    type: 'SEARCH_CHARACTERS',
    name
})

export const filterSpecies = (species) => ({
    type: 'FILTER_SPECIES',
    species
})

export const toggleLoading = (boolean) => ({
    type: 'TOGGLE_LOADING',
    boolean
})