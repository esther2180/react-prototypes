// import React from 'react';
// import Table from './table';

// export default () => {

//     const students = [
//         {
//             name: "Arden Kona",
//             course: "Drawing",
//             grade: 89
//         },
//         {
//             name: "Sam Parker",
//             course: "Math",
//             grade: 99
//         },
//         {
//             name: "Elisha Kimberly",
//             course: "English",
//             grade: 98
//         },
//     ];

//     return (
//         <div className="container">
//             <h1>"Student Grade Table"</h1>
//             <Table data={students} />
//         </div>
//     )
// }

import React from 'react';
import Table from './table';

export default () => {

    const students = [
        {
            name: 'Peter Parker',
            course: 'Intro to Phtography',
            grade: 85 
        },
        {
            name: 'Bruce Banner',
            course: 'Psychology',
            grade: 91
        },
        {
            name: 'Tony Stark',
            course: 'Mechanical Engineering',
            grade: 100    
        },
    ];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )    
}

