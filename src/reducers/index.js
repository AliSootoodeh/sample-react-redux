import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import polls from "./polls";
import authedUser from "./authedUser";
import users from "./users";

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer,
});
