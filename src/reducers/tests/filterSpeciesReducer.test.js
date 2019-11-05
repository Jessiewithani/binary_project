import { filterSpeciesReducer } from '../filterSpeciesReducer';

describe('filterSpeciesReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = filterSpeciesReducer(undefined, []);
        expect(result).toEqual(expected)
    });
    it('should be able to filter characters by humans', () => {
        const initialState = [];
        const action = {
            type: 'FILTER_SPECIES', 
            species: [{   
                id: 1, 
                name: 'Rick Sanchez', 
                status: 'Alive', 
                species: 'Human', 
                type: '', 
                gender: 'Male', 
                location: 'Earth (Replacement Dimension)', 
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            ]
        }
        const expected = [{   
            id: 1, 
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human', 
            type: '', 
            gender: 'Male', 
            location: 'Earth (Replacement Dimension)', 
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        ]

        const result = filterSpeciesReducer(initialState, action);

        expect(result).toEqual(expected)
    })
})