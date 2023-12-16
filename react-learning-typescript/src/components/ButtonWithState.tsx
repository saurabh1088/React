import { useState } from "react"

/* 
ButtonWithState below is an example of useState.

Official documentation for useSate https://react.dev/reference/react/useState

useState will return an array which in below example is destructured with [color, setColor]. This retured array consists
of the current state. In example below during first render of the web page the initial state is `black`, hence at this time
the state given from `color` will be `black`. Next when page is rendered and a button is clicked then the `color` will be
set to either `red`, `blue` or `yellow` as per the button which was clicked.
The first value in the destructured array as discussed above is the state and the second value in the array is the set 
function which lets one update the state to different value and will trigger a re-render.
*/
export default function ButtonWithState() {
    const [color, setColor] = useState("black");

    return (
        <div>
            <h1>Selected color is {color}</h1>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        </div>
    )
}