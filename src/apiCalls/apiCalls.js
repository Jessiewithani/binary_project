export const getCharacters = async (url = 'https://rickandmortyapi.com/api/character') => {
    const response = await fetch(url)
    if(!response.ok) {
        throw Error('could not get characters')
    } else {
        let characters = await response.json()
        return {...characters}
    }
}

