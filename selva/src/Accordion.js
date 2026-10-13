
// import {React,useState} from 'react'
// import './Accordion.css'
// const Accordion=()=>{
//     const[open,setOpen]=useState(false)
//     const accor=[
//         {id:1, title:"accordion1",para:"paragragh1"},
//         {id:2,title:"accordion2",para:"paragragh2"},
//     ]
//     function handled(id){
//         console.log(id)
//         setOpen(id)
//         setOpen(open=== id ? null:id)
//     }
//     return(
//          <>
//            {/* <p className='head' onClick={()=>{setOpen(!open)}}>Accordion1 </p>
//            {open ? <p>qwertyuiopasdfghjklzxcvbnmmnbvcxzlkjhgfdsapoiuytrewq</p>:""}
//             <p className='head'>Accordion2</p>
//             <p>Topic Sentence: The first or second sentence that introduces the main controlling idea of the paragraph.</p> */}
//             {
//                 accor.map((res)=>{
//                     return(
//                     <>
//                     <p className='head' onClick={()=>handled(res.id)}>{res.title}</p>
//                      {res.id}
//                         {open==res.id ?<p>{res.para}</p>:""}
//                     </>)
//                 }
//             )
//             }
//          </>
//     )
// }
// export default Accordion;




