import { createStore } from 'redux';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Akash',
      email: 'akash45@gmail.com',
    },
    {
      id: 2,
      name: 'Prabhu',
      email: 'prabhu99@gmail.com',
    },
  ],
  loggedInUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default createStore(reducer);
