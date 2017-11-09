import { combineReducers } from 'redux';
import { State } from './../state';
import { Action, IncrementCounterAction, ResetCounterAction } from '../actions';

const initialState = { value: 0 };

function counterReducer (state = initialState, action: Action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { value: state.value + (action as IncrementCounterAction).amount};
    case 'RESET_COUNTER':
      return { value: 0 };
    default:
      return state;
  }
}

// Global reducer definition - maps reducers to pieces of state
export const reducers = combineReducers<State>({
  counter: counterReducer
});
