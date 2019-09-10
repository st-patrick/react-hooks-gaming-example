import * as React from "react";
import {TabButton} from "./TabButton";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function TabButtons () {
    var names = ['Jake', 'Jon', 'Thruster'];
    var namesList = names.map(function(name){
        return <TabButton className="tab-button" title={name} />;
    })

    return (
        <div id="tab-buttons">
            { namesList }
        </div>
    )
}
