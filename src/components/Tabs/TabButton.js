import * as React from "react";
import './TabButton.css';
import {Animate} from "react-simple-animate";
import {useTabPlay} from "./Tab";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function TabButton(props) {
    const [classprop, setClassprop] = React.useState(props.className);

    function onClick() {
        setClassprop("tab-button large");
    }

    return (
        <div className={classprop} onClick={onClick}>
                    {props.title}
        </div>
    );
}

export function TabButton2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
