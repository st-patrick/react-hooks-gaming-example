import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Accordion(props) {
    const [current_active, setCurrentActive] = React.useState(0);
    const [tabs, setTabs] = React.useState( []);

    /**
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
    }, [])**/


    function updateActive(reference, index) {
        if (current_active == index) return;
        setCurrentActive(index);
    }

    return (
        <div>
            <div className={"row " + (current_active == 0 ? "active" : "")} onClick={() => updateActive(this, 0)}>
                <h3>Address {(current_active == 0 ? "-" : "+")}</h3>
                <div className={"body"}>
                    <ul>
                        <li>street: {props.tab.address.street}</li>
                        <li>suite: {props.tab.address.suite}</li>
                        <li>city: {props.tab.address.city}</li>
                        <li>zipcode: {props.tab.address.zipcode}</li>
                    </ul>
                </div>
            </div>
            <div className={"row " + (current_active == 1 ? "active" : "")} onClick={() => updateActive(this, 1)}>
                <h3>Company {(current_active == 1 ? "-" : "+")}</h3>
                <div className={"body"}>
                    <ul>
                        <li>name: {props.tab.company.name}</li>
                        <li>catchphrase: {props.tab.company.catchPhrase}</li>
                        <li>bs:  {props.tab.company.bs}</li>
                    </ul>
                </div>
            </div>
            <div className={"row " + (current_active == 2 ? "active" : "")} onClick={() => updateActive(this, 2)}>
                <h3>Other {(current_active == 2 ? "-" : "+")}</h3>
                <div className={"body"}>
                    <ul>
                        <li>phone: {props.tab.phone}</li>
                        <li>website: {props.tab.website}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
