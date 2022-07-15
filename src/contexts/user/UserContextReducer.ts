// type UserStateType = {
//   user: object,
// }

// type ActionTypes = {
//   type: 'UPDATE_STATE' | 'SET_USER_DETAILS',
//   payload: 
// }

export const initialState = {
  user: {},
  loggedIn: false,
};

// type ReducerType = {
//   state: UserStateType
//   action: ActionTypes,
// }

export const userContextReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'update_state':
      return {
        ...state,
        ...action.payload,
      };
    case 'login_success':
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};
