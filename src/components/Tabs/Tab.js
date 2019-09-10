import * as React from "react";
import { Animate } from 'react-simple-animate';
import {useAnimate} from "react-simple-animate/dist";
import {useEffect} from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Tab() {
    const [play, setPlay] = React.useState(null);

    function onClick() {
        setPlay(true);
    }

    return (
        <Animate
            play={play}
            start={{transform: 'translateX(0px)'}}
            end={{transform: 'translate(300px)'}}
        >
            <div id="tab1" onClick={onClick}></div>
        </Animate>
    );
}
