import { DECREMENT } from "../actionTypes";

export default function countReducer(
    state = { n: 10, msg: "hello" },
    action
) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, n: state.n + 1 };
        case DECREMENT:
            return { ...state, n: state.n - 1 };
        default:
            return state;
    }
}
