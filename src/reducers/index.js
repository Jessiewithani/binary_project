import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
// import { locationsReducer } from './locationsReducer';
import { searchCharactersReducer } from './searchCharactersReducer';

export const rootReducer = combineReducers({
    charactersReducer,
    // locationsReducer,
    searchCharactersReducer
})