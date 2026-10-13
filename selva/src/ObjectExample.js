import React from 'react';
const ObjectExample=()=>{
    const student=[{
        id:1,
        name:"selva",
        age:20,
        dept:"IT",
        marks:90,
    },
    {
        id:2,
        name:"karthiga",
        age:20,
        dept:"IT",
        marks:91
    },
    ]
    const data=student.map((i)=>{
        return(
        <>
        <table border="1" >
            <thead> 
                <tr>
                <th>{i.id}</th>
                <th>{i.name}</th>
                <th>{i.age}</th>
                <th>{i.dept}</th>
                <th>{i.marks}</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>selva</td>
                <td>20</td>
                <td>IT</td>
                <td>90</td>
                </tr>
                <tr>
                <td>2</td>
                <td>karthiga</td>
                <td>20</td>
                <td>IT</td>
                <td>91</td>
                </tr>
            </tbody>
        </table>
        
        </>
        )
    })}
    export default ObjectExample;
    // console.log(data);
    // const numbers=[1,2,3,4,5,6];
    // const filtered=numbers.filter(
    //     function(n){
    //         return n>2
    //     }
    // )
    // console.log(filtered)
    // const number=[1,2,3,4,5,6,7];
    // console.log("pop",number.pop(),number)
    //   console.log("push",number.push(7),number)
    //     console.log("shift",number.shift(),number)
    //       console.log("unshift",number.unshift(7),number)


    // const datamark=student.filter((i)=>i.marks>89)
    // console.log(datamark)
       

    // const datamark=student.filter(
    //     function(i){
    //         return i.marks>89
    //     }
    // )
    // const name=["selva","neshi","hars","mouni"]
    // name.splice(1,2);
    // console.log(name);

    // console.log(datamark)
    //     return (
    //     <>
    //     <table border="1" >
    //         <thead> 
    //             <tr>
    //             <th>id</th>
    //             <th>name</th>
    //             <th>age</th>
    //             <th>dept</th>
    //             <th>marks</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>1</td>
    //             <td>selva</td>
    //             <td>20</td>
    //             <td>IT</td>
    //             <td>90</td>
    //             </tr>
    //             <tr>
    //             <td>2</td>
    //             <td>karthiga</td>
    //             <td>20</td>
    //             <td>IT</td>
    //             <td>91</td>
    //             </tr>
    //         </tbody>
    //     </table>
    //     {datamark.map((i)=>{
    //       return(
    //         <>
    //         {i.name}
    //         </>
    //       )
    //     })}
    //     </>

    
