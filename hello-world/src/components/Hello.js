import React from 'react';

export const Hello = () => {
    /* return(
        <div>
            <h1>Hello Vishwas</h1>
        </div>
    ) */

   return React.createElement(
       'div',
       {className: 'name'},
       React.createElement('h1', {id:'firstName'}, 'Welcome Pradeepa')
   )
}