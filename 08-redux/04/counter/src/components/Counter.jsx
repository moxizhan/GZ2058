import React from "react";

export default function Counter(props) {
    return (
        <div>
            <button onClick={() => props.decrement()}>-</button>
            <mark>{props.n}</mark>
            <button onClick={() => props.increment()}>+</button>
        </div>
    );
}
