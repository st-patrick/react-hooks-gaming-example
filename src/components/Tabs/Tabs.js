import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Tabs(number) {
    const [current_active, setCurrentActive] = React.useState(0);
    const [flipped, setFlipped] = React.useState(null);

    function updateActive(reference, index) {
        if (current_active == index) return;

        var tab_list = document.getElementsByClassName('tab');
        if (flipped != null) {
            tab_list[flipped].classList.remove('flip-down');
        }

        tab_list[current_active].classList.add('flip-down');
        setFlipped(current_active);

        tab_list[current_active].classList.remove('active');
        document.getElementsByClassName('tab-button')[current_active].classList.remove('active');

        setCurrentActive(index);
        tab_list[current_active].classList.add('active');
        reference.classList.add('active');
    }

    return (
        <main>
            <nav id="tabs">
                <div className="tab-button active" onClick={() => updateActive(this, 0)}>
                    <leading>01</leading>
                    <span>Welcome</span></div>
                <div className="tab-button" onClick={() => updateActive(this, 1)}>
                    <leading>02</leading>
                    <span>Start</span></div>
                <div className="tab-button" onClick={() => updateActive(this, 2)}>
                    <leading>03</leading>
                    <span>Sign Up</span></div>
                <div className="tab-button" onClick={() => updateActive(this, 3)}>
                    <leading>04</leading>
                    <span>Confirm</span></div>
                <div className="tab-button" onClick={() => updateActive(this, 4)}>
                    <leading>05</leading>
                    <span>What's Next</span></div>
            </nav>

            <div className="tab active">
                <h1>Helloooo11</h1>
                <h1>Welcome to OGame</h1>
            </div>
            <div className="tab">
                <h1>Helloooo22</h1>
                <h1>Welcome to OGame</h1>
            </div>
            <div className="tab">
                <h1>Helloooo33</h1>
                <h1>Welcome to OGame</h1>
            </div>
            <div className="tab">
                <h1>Helloooo44</h1>
                <h1>Welcome to OGame</h1>
            </div>
            <div className="tab">
                <h1>Helloooo55</h1>
                <h1>Welcome to OGame</h1>
            </div>
        </main>
    );
}
