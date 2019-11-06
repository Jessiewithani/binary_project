import { getCharacters } from '../apiCalls/apiCalls'

describe('apiCalls', () => {

    describe('getCharacters', () => {
      let mockCharacters = [
        {   id: 1, 
          name: 'Rick Sanchez', 
          status: 'Alive', 
          species: 'Human', 
          type: '', 
          gender: 'Male', 
          location: 'Earth (Replacement Dimension)', 
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
      ]
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockCharacters)
          })
        })
      })
      it('should call fetch with the correct url', () => {
        getCharacters();

        expect(window.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
      })
      it('should return an array of characters', () => {
        getCharacters()
          .then(results => expect(results).toEqual(mockCharacters))
      })
      it('should return an error', () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: false
          })
        })
        expect(getCharacters()).rejects.toEqual(Error('could not get characters'))
      })
      it('should return an error if promise rejects', () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.reject(Error('fetch failed'))
        })
        expect(getCharacters()).rejects.toEqual(Error('fetch failed'))
      })
    })
})
  