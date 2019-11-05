import { charactersReducer } from '../charactersReducer'

describe('charactersReducer', () => {
    it('should return the initial state', () => {
        const expected = []

        const result = charactersReducer(undefined, [])

        expect(result).toEqual(expected)
    });
    it.skip('should be able to return characters', () => {
        const initialState = [];
        const action = {
            type: 'SAVE_CHARACTERS',
            characters: [
                {   id: 1, 
                    name: 'Rick Sanchez', 
                    status: 'Alive', 
                    species: 'Human', 
                    type: '', 
                    gender: 'Male', 
                    location: 'Earth (Replacement Dimension)', 
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            ]
        }
        const expected = [
            {   id: 1, 
                name: 'Rick Sanchez', 
                status: 'Alive', 
                species: 'Human', 
                type: '', 
                gender: 'Male', 
                location: 'Earth (Replacement Dimension)', 
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        ]

        const result = charactersReducer(initialState, action);

        expect(result).toEqual(expected)
    })
})