// import React from "react";

const initialState = {};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const currentItemFromState = state[action.item.id];

      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: currentItemFromState
            ? currentItemFromState.quantity + 1
            : 1,
        },
      };
    }

    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return stateCopy;
    }
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);
