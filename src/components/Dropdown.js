import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export function Dropdown(props) {
    const [options, setOptions] = React.useState({
        account: "Account",
        settings: "Settings",
        logout: "Logout"
    });

    return (
        <div class={"dropdown-container"}>
            <form>
                <select type={"select"} className={"custom-select"} style={{width: 200}} >
                    {Object.keys(options).map((key, index) => (
                        <option value={key}>{options[key]}</option>
                    ))}
                </select>
            </form>
        </div>
    );
}
