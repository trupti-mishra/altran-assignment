import * as userAction from "../actions/users.action";
import { object } from "prop-types";
const users = (
  state = {
    status: null,
    error: null,
    users: null,
  },
  action
) => {
  switch (action.type) {
    case userAction.GET_USERS_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    case userAction.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        users: action.users
      });
    case userAction.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,

        error: action.error
      });

    default:
      return state;
  }
};
export default users;
