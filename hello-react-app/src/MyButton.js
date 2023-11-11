/*
MyButton here is defined as a function component. Components lets one split UI into re-usable pieces. Conceptually, 
components are like JavaScript functions.

After defining MyButton function component here, we are using it in App.js and for that we will need to import it in
App.js as below :

import MyButton from './MyButton';

Props
In the definition of MyButton below in the brackets we have `props`. This `props` says here that this React component
accepts a single `props` which actually stands for properties.
So in a nutshell :
Props are arguments passed into React components. 
*/

function MyButton(props) {
  return (
    <button>My Button : {props.name}</button>
  );
}

export default MyButton;