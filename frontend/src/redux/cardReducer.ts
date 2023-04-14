import { State } from '../features/card/types/State';
import Action from '../types/Action';

const initialState = {
  card: [],
};

const cardReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_CARD':
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};
export default cardReducer;
