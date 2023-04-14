import { createContext } from 'react';
import { ContextState } from './types/State';

const initialContextValue: ContextState = {
  state: {
    users: [],
    card: [],
    auth: undefined,
  },
  dispatch: () => {},
};

const stateContext = createContext(initialContextValue);
export default stateContext;
