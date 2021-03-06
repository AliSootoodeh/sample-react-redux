import { ADD_POLL } from "../actions/polls";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_POLL:
      const poll = action.poll;
      const { id, author } = poll;
      return {
        ...state,
        [author]: { ...state[author], polls: state[author].polls.concat([id]) },
      };
    default:
      return state;
  }
}
