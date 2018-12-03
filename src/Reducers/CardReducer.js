import { ADD } from '../Actions/Actions';
import { REMOVE } from '../Actions/Actions';

const cardReducer = (card = [], {type, payload}) => {
  switch (type) {
    case ADD:
      return [...card, payload.article]
    case REMOVE: 
      return [
        ...card.slice(0,payload.index),
        ...card.slice(payload.index +1)
      ];
    default:
      return card;
  }
}

export default cardReducer;