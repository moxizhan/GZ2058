import React from "react";

export default function Friends(props) {
    return (
        <div>
            <ul>
                {props.friends.map((f,i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <button onClick={() => props.syncAdd()}>sync add</button>
            <button onClick={() => setTimeout(props.syncAdd, 3000)}>
                delay add
            </button>

            <button onClick={() => props.asyncAdd()}>
                async add
            </button>
            <button onClick={() => props.thunkAdd(99)}>
                thunk add
            </button>
        </div>
    );
}
