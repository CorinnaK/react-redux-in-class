import React from 'react';
import HelloYourName from './HelloYourName'
import Hello from './Hello';

class HelloStudents extends React.Component
{
    constructor ( props )
    {
        super ( props );

        this.state = {
            students: [
                {
                    name: "Osa",
                    favFood: "Ice Cream"
                },
                {
                    name: "Muzzafar",
                    favFood: "Pasta"
                },
                {
                    name: "Danielle",
                    favFood: "Chips"
                }
            ]
        };
    }
    render ()
    {
        return (
            <ul>
                {this.state.students.map(
                     student => (
                         <li>
                             <HelloYourName name={student.name} favFood={student.favFood} />
                         </li>
                    )
                )}
            </ul>
        );
    }
}
export default HelloStudents;