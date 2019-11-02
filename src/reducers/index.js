import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { favoritesReducer } from './favoritesReducer';
import { searchCharactersReducer } from './searchCharactersReducer';

export const rootReducer = combineReducers({
    charactersReducer,
    favoritesReducer,
    searchCharactersReducer
})