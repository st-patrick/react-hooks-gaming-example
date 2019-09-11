import * as React from "react";
import {Accordion} from "../Accordion";
import {Dropdown} from "../Dropdown";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Tabs(props) {
    const [current_active, setCurrentActive] = React.useState(0);
    const [flipped, setFlipped] = React.useState(null);

    const [tabs, setTabs] = React.useState( []);

    React.useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        fetch('https://jsonplaceholder.typicode.com/users', {signal: signal})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setTabs(data.slice(0, props.number))
                console.log(tabs)
            })
            .catch(console.log);

        return function cleanup() {
            abortController.abort();
        }
    }, [])

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
                        <h1>{tab.id}</h1>
                        <span>{tab.username}</span></div>
                ))}
            </nav>

            {tabs.map((tab, index) => (
                <div className={"tab " + (current_active == index ? "active " : "") + (flipped == index ? "flip-down" : "")} >
                    <h1>{tab.name}</h1>
                    <h1>{tab.email}</h1>
                    <Accordion number={3} tab={tab}/>
                    <Dropdown number={123} />
                </div>
            ))}
        </main>
    );
}
