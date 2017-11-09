import * as redux from 'redux';

import { api } from '../api';
import * as state from '../reducers/index';

// Action Type Definitions
export type IncrementCounterAction = { type: 'INCREMENT_COUNTER', amount: number };
export type ResetCounterAction = { type: 'RESET_COUNTER' };
export type Action = IncrementCounterAction | ResetCounterAction;

// Action Creator Functions
export function incrementCounter(amount: number): Action {
  return {
    type: 'INCREMENT_COUNTER',
    amount: amount
  };
}

export function resetCounter(): Action {
  return {
    type: 'RESET_COUNTER'
  };
}
