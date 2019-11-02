export const saveCharacters = (characters) => ({
    type: 'SAVE_CHARACTERS',
    characters
})

export const saveFavorites = (favorites) => ({
    type: 'SAVE_FAVORITES',
    favorites
})

export const removeFavorites = (id) => ({
    type: 'REMOVE_FAVORITES',
    id
})

export const searchCharacter = (name) => ({
    type: 'SEARCH_CHARACTERS',
    name
})