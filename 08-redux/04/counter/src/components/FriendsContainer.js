import { connect } from "react-redux";
import Friends from "./Friends";

function mapStateToProps(state) {
    return {
        friends: state.friends,
    };
}

function mapDispathcToProps(dispatch) {
    return {
        syncAdd: () => dispatch({ type: "ADDFRIEND" }),
        asyncAdd: () => setTimeout(() => dispatch({ type: "ADDFRIEND" }), 3000),
        thunkAdd: (n) =>
            dispatch((dispatch) => {
                console.log("开始异步");
                setTimeout(() => {
                    dispatch({ type: "ADDFRIEND" ,n});
                    console.log("异步结束");
                }, 3000);
            }),
    };
}

export default connect(mapStateToProps, mapDispathcToProps)(Friends);
