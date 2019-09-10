import * as React from "react";
import { Animate } from 'react-simple-animate';
import {useAnimate} from "react-simple-animate/dist";
import {useEffect} from "react";
import {TabButton} from "./TabButton";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Tab(number) {
    var names = ['Jake', 'Jon', 'Thruster'];
    var namesList = names.map(function(name, index){
        return (
            <div className="tab">
                <input type="radio" id={"tab-"+index} name={"tab-group-"+index} />
                <label htmlFor={"tab-"+index}>{name}</label>
                <div className="content">
                    {name}
                </div>
            </div>
        );
    })

    return (
        <div className="tabs">
            {namesList}
        </div>
    );
}
