import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Accordion(props) {
    const [current_active, setCurrentActive] = React.useState(0);

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
        setCurrentActive(index);
    }

    return (
        <div>
            {tabs.map((tab, index) => (
                <div className={"row " + (current_active == index ? "active" : "")} onClick={() => updateActive(this, index)}>
                    <h3>Caption</h3>
                    <h3 style={"text-align: right;"}>+</h3>
                    <div className={"body"}>
                        <ul>
                            <li>asdfasfd</li>
                            <li>asdfasfd</li>
                            <li>asdfasfd</li>
                            <li>asdfasfd</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
