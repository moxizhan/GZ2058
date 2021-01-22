// import countReducer from "./count";
// import friendsReducer from "./friends";

// export default function reducer(state = {}, action) {
//     return {
//         count: countReducer(state.count, action),
//         friends: friendsReducer(state.friends, action)
//     };
// }

import { combineReducers } from "redux";
import count from "./count";
import friends from "./friends";
export default combineReducers({ count, friends });
// export default combineReducers({ count:count , friends: friends });
// export default combineReducers({
//     x: count,
//     y: friends
// });
