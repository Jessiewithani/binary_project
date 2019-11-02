export const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    if(!response.ok) {
        throw Error('could not get characters')
    } else {
        let characters = await response.json()
        return characters.results
    }
}