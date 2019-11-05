import * as actions from '.';

describe('actions', () => {

    describe('SAVE_CHARACTERS', () => {
        it('should have a type of SAVE_CHARACTERS', () => {
            const characters = [
                {   id: 1, 
                    name: 'Rick Sanchez', 
                    status: 'Alive', 
                    species: 'Human', 
                    type: '', 
                    gender: 'Male', 
                    location: 'Earth (Replacement Dimension)', 
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }
            ]
            const expectedAction = {
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
            const result = actions.saveCharacters(characters)

            expect(result).toEqual(expectedAction)
        })
    })

    describe('SEARCH_CHARACTERS', () => {
        it('should have a type of SEARCH_CHARACTERS', () => {
            
        })
    })
})