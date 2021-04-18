// import { Link } from "react-router-dom"
// import React from "react";

// const Published = ({ squestions }) => {
//     return (
//         <>
//             {squestions.length !=0 ? 
//                 squestions.map((el,key) => {
//                     <div key={key}>
//                         <h4>el.text</h4>
//                         {el.options.length == 2 ? 
//                             el.options.map((el1,key1) => {
//                                 <>
//                                     <input type="radio" key={key1} name="radio" />
//                                     <label style={{marginLeft:"10px"}}>{el1.value}</label><br />
//                                 </>
//                             }) 
//                             :
//                                 el.options.map((el1,key1) => {
//                                     <>
//                                         <input key={key1} type="checkbox" />
//                                         <label style={{marginLeft:"10px"}}>{el1.value}</label><br />
//                                     </>
//                                 }) 
//                         }
//                     </div>
//                 })
//                 : <p>No questions</p>
//             }
//             <Link to="/">
//                 <button className="btn btn-danger m-1">Confirm</button>
//             </Link>
//         </>
//     )
// }

// export default Published;

import React from "react";
import {Link} from "react-router-dom";
const Published=({squestions})=>{
  return (
    <>
    	{
    		squestions.length!==0
    		?
    		squestions.map((el,key)=>(
    			<div key={key}>
    				<h3>{el.text}</h3>
					{
						el.options.length===2
						?
						el.options.map((el1,key1)=>(
						<>
							<input type="radio" key={key1} name="radio"/>
							<label style={{marginLeft:"10px"}}>{el1.value}</label><br />
						</>
						))
						:
						el.options.map((el1,key1)=>(
						<>
							<input type="checkbox" key={key1} />
							<label style={{marginLeft:"10px"}}>{el1.value}</label><br />
						</>
						))
					}
    			</div>
    		))
    		:
    		<p>No questions are added.</p>
    	}
    	<Link to="/">
          <button className="btn btn-danger m-1">Confirm</button>
        </Link>
    </>
  );
}

export default Published;