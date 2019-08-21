import React from 'react';
import Person from './Person';

function NameList() {
     const names = ['San', 'Shan', 'Deepa', 'San'] 
    const persons = [
        {
            id: 1,
            name: 'San',
            age: 27,
            skill: 'Front end'
        },
        {
            id: 2,
            name: 'Shan',
            age: 29,
            skill: 'Database'
        },
        {
            id: 3,
            name: 'Deepa',
            age: 22,
            skill: 'Accounts'
        }
    ]
   /*  const personList = persons.map( person => <Person key={person.id} person={person}/> )  */
   const nameList = names.map((name, index) => <h2 key={index}> {index} {name} </h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
           { nameList } 

          {/*  {personList} */}
        </div>
    )
}

export default NameList
