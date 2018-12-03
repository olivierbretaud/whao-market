export const ADD = 'order:addOrderAction';
export const REMOVE = 'order:removeFromOrder';

export const addOrderAction = (article) => {
  return {
    type: ADD,
    payload: {
      article: article
    }
  }
};

export const removeFromOrder = (index) => {
  return {
    type: REMOVE,
    payload: {
      index: index
    }
  }
};