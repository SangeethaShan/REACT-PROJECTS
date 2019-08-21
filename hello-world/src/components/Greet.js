import React from 'react';

/* function Greet(){
    return <h1> Hello Sangeetha!</h1>
} */

//ES6 Arrow function:

export const Greet = ({name, heroName}) => { //Destructuring Props 1st way
    // const {name, heroName} = props  // Destructuring Props 2nd way
    /* console.log(props) */
    return(
        <div>
        <h1> Hello { name } a.k.a { heroName}</h1>
     {/*    {props.children} */}
        </div>
    )
}

//export default Greet