export const saveCharacters = (characters) => ({
    type: 'SAVE_CHARACTERS',
    characters
})

export const searchCharacter = (name) => ({
    type: 'SEARCH_CHARACTERS',
    name
})

export const saveLocations = (locations) => ({
    type: 'SAVE_LOCATIONS',
    locations
})