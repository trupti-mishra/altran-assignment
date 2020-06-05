import axios from "axios";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export function getUsersRequest(page) {
  return {
    type: GET_USERS_REQUEST,
    status: "REQUESTING"
  };
}

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    status: "SUCCESS",
    users
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: "ERROR",
    error
  };
}
export function getUsers() {
  return async dispatch => {    
    dispatch(getUsersRequest());
    try {
      let url = `https://reqres.in/api/users?page=2`;
      const result = await axios.get(url);
      const resultJson = await result.data.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getUsersSuccess(resultJson));
    } catch (e) {
      return dispatch(getUsersFailure(e.message));
    }
  };
}

