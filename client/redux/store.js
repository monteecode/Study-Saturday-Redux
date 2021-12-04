import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import axios from "axios";
import thunkMiddleware from "redux-thunk";

// ACTION TYPES go here:
export const GETALLSTUDENTS = "GET_ALL_STUDENTS";
//get all students

// ACTION CREATORS go here:
export const getStudents = (students) => {
  return {
    type: GETALLSTUDENTS,
    students,
  };
};

// THUNK CREATORS go here:
const fetchAllStudents = () => async (dispatch) => {
  //1st fetch with await
  const { data } = await axios.get("/api/students");
  //2nd  populate the data to the action creator using dispatch
  dispatch(getStudents(data));
};

const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

// dispatch your own actions here to test your store functionality:
store.dispatch({ type: "HELLO_WORLD" });

// ^ you can see the logs above in your console, thanks to redux-logger!

export default store;
