import React, { useReducer, createContext } from 'react';
import {SET_USER} from './ReducerActions';

const initState = {
  user: null
};

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload.user };
    default:
      throw new Error('Invalid reducer action!');
  }
};

export const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(AuthReducer, initState);

  return <AuthContext.Provider value={[state, dispatch]}>
    {props.children}
  </AuthContext.Provider>
};



