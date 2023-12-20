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
So basically useState gives back the current state and the funtion which will update the state.

In React funtions starting with `use` are called `Hooks`. `useState` used in example below is a built-in hook provided by
React framework.

What makes Hooks different from funtions?

Hooks are more restrictive than other functions.
State, before React version 16.8 one needed to handle state only using class components. With version 16.8 Hooks was
introduced, with React Hooks, we can use state, and other React features, in a functional component. It empowers one to 
do functional programming in React.

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