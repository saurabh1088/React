/*
MyButton here is defined as a function component. Components lets one split UI into re-usable pieces. Conceptually, 
components are like JavaScript functions.

After defining MyButton function component here, we are using it in App.js and for that we will need to import it in
App.js as below :

import MyButton from './MyButton';
*/

function MyButton() {
  return (
    <button>My Button</button>
  );
}

export default MyButton;