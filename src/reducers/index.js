import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { filterSpeciesReducer } from './filterSpeciesReducer';
import { searchCharactersReducer } from './searchCharactersReducer';

export const rootReducer = combineReducers({
    charactersReducer,
    filterSpeciesReducer,
    searchCharactersReducer
})