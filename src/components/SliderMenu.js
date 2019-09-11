import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function SliderMenu() {
    const [is_open, setIsOpen] = React.useState(false);

    function showHideMenu() {
        setIsOpen(!is_open);
    }

    return (
        <div>
            <div className={"slide-menu-container " + (is_open ? "open" : "")}>
                <div className="slide-menu-bg"></div>
                <div className="slide-menu-bg"></div>
                <div className="slide-menu-bg"></div>
            </div>

            <nav id="burger-menu">
                <button className={"hamburger hamburger--emphatic " + (is_open ? "is-active" : "")}
                        type="button" onClick={() => showHideMenu()}>
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                </button>
            </nav>

            <div className={"slide-menu"}>
                dflksdjflk
                <h1>jhlhlh</h1>
            </div>
        </div>
    );
}


