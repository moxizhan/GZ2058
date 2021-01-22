import { connect } from "react-redux";
import Counter from "./Counter";

import decrementCreater from "../store/actions/decrementCreater";

function mapStateToProps(state) {
    return {
        n: state.count.n,
    };
}

function mapDispathcToProps(dispatch) {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch(decrementCreater()),
    };
}

export default connect(mapStateToProps, mapDispathcToProps)(Counter);
