import * as React from "react";
import {Accordion} from "../Accordion";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Tabs(props) {
    const [current_active, setCurrentActive] = React.useState(0);
    const [flipped, setFlipped] = React.useState(null);

    const [tabs, setTabs] = React.useState( []);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setTabs(data.slice(0, props.number))
            console.log(tabs)
        })
        .catch(console.log);

    function updateActive(reference, index) {
        if (current_active == index) return;
        setFlipped(current_active);
        setCurrentActive(index);
    }

    return (
        <main>
            <nav id="tabs">
                {tabs.map((tab, index) => (
                    <div className={"tab-button " + (current_active == index ? "active" : "")}
                         onClick={() => updateActive(this, index)}>
                        <leading>{tab.id}</leading>
                        <span>{tab.username}</span></div>
                ))}
            </nav>

            {tabs.map((tab, index) => (
                <div className={"tab " + (current_active == index ? "active " : "") + (flipped == index ? "flip-down" : "")} >
                    <h1>{tab.name}</h1>
                    <h1>{tab.company.catchPhrase}</h1>
                    <Accordion number={3}/>
                </div>
            ))}
        </main>
    );
}
