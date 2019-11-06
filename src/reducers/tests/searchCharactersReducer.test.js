import { searchCharactersReducer } from '../searchCharactersReducer'

describe('searchCharactersReducer', () => {
    
    it('should run the initial state', () => {
        const expected = ''

        const result = searchCharactersReducer(undefined, '')

        expect(result).toEqual(expected)
    });
    it('should be able to search for a character', () => {
        const initialState = ''

        const action = {
            type: 'SEARCH_CHARACTERS',
            name: 'Morty Smith'
        }
        const expected = 'Morty Smith'

        const result = searchCharactersReducer(initialState, action)

        expect(result).toEqual(expected)
    })
})
