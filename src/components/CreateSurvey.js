import Question from "./Question"
import TypeSelector from "./TypeSelector"
import Options from "./Options"
import { useState } from "react"
// import { Link } from "react-router-dom"

const CreateSurvey = ({ squestions,setSquestions }) => {

  const getRandom = () => { 
    return Math.floor((Math.random() * 1000) +1); 
  }
  const [qText, setQtext] = useState('');
  const [qType,setQtype] = useState(0);
  const [options,setOptions] = useState([{uid: getRandom(), value:'' }]);
  // const [questions,setQuestions]=useState([]);

  const addOptions = () => {
    let newOption = {
      uid: getRandom(),
      value: ''
    }
    let updatedOptions = [...options];
    updatedOptions.push(newOption);
    setOptions(updatedOptions);
  }

  const deleteOptions = () => {
    if(options.length === 2){
      alert("Error: A select type question should have atleast 2 options");
    }else{
      let updatedOptions=[...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  }

  const updateOptionText = (id,text) => {
    let updatedOptions=[...options];
    let changeIndex=updatedOptions.findIndex(x => x.id === id);
    updatedOptions[changeIndex].value=text;
    setOptions(updatedOptions);
  }

  const addQuestions = () => {
    let newQuestion = {
      uid: getRandom(),
      value: ''
    }
    let updatedQuestions=[...squestions];
    updatedQuestions.push(newQuestion);
    setSquestions(updatedQuestions);
    setQtext('');
    setQtype(0);
    setOptions([{uid: getRandom(), value:'' }]);
  }

  const publishQuestions = () => {
    let newQuestion={};
    if(qType === 2){
      newQuestion = {
        qid: getRandom(),
        text: qText,
        options: [{uid: getRandom(), value: 'Yes'},{uid: getRandom(), value: 'No'}]
      }
    }else{
      newQuestion = {
        qid: getRandom(),
        text: qText,
        options
      }
    }
    let updatedQuestions=[...squestions];
    updatedQuestions.push(newQuestion);
    setSquestions(updatedQuestions);
    console.log(squestions);
  }

  return (
    <>
      <TypeSelector qType={qType} setQtype={setQtype} />
      {qType !== 0 ?
      <> 
        <Question setQtext={setQtext} />
        {qType === 1 ? 
          <>
            {options.map((opt,key) => (
              <Options 
                key={key} 
                uid={opt.id}
                addOptions={addOptions}
                deleteOptions={deleteOptions}
                updateText={updateOptionText}
              />
            ))}
            {options.length>=4 ? 
              <>
                <button className="btn btn-danger m-1" onClick={addQuestions}>Add Question</button>
                {/* <Link to="/published"> */}
                  <button className="btn btn-danger m-1" onClick={publishQuestions}>Publish</button>
                {/* </Link> */}
              </>
              : null
            }
          </>
          :
            <>
              <div className="col-md-8 offset-md-2 col-12 input-gray my-3">
					    		<input type="text" className="form-control" value="Yes" /><br />
					    		<input type="text" className="form-control" value="No" />
    						</div>
              <button className="btn btn-danger m-1" onClick={addQuestions}>Add Question</button>
              {/* <Link to="/published"> */}
                <button className="btn btn-danger m-1" onClick={() => publishQuestions()}>Publish</button>
              {/* </Link> */}
            </>
        }
      </>
      : null}
    </>
  )
}

export default CreateSurvey;


// import React,{useState} from "react";
// import {Link,useHistory} from "react-router-dom";


// import TypeSelector from "./TypeSelector";
// import Question from "./Question";
// import Options from "./Options";

// const CreateSurvey=({squestions,setSquestions})=>{

// 	const getRandom=()=>{
// 		return Math.floor((Math.random()*1000)+1);
// 	}

// 	const history=useHistory();
// 	const [qtext,setQtext]=useState("");
// 	const [qtype,setQtype]=useState(0);
// 	const [options,setOptions]=useState([{uid:getRandom(),value:''}]);
// 	const [questions,setQuestions]=useState([]);

// 	const addQuestions=()=>{
// 	    let newQuestion={
// 	      qid:getRandom(),
// 	      text:qtext,
// 	      options
// 	    }
// 	    let updatedQuestions=[...squestions];
// 	    updatedQuestions.push(newQuestion);
// 	    setSquestions(updatedQuestions);
// 	    setQtext("");
// 	    setQtype(0);
// 	    setOptions([{uid:getRandom(),value:''}]);
//   	}

// 	const addOptions=()=>{
// 		let newOption={
// 			uid:getRandom(),
// 			value:''
// 		}
// 		let updatedOptions=[...options];
// 		updatedOptions.push(newOption);
// 		setOptions(updatedOptions);
// 	}

// 	const publishQuestions=()=>{
// 		let newQuestion={};
// 		if(qtype===2)
// 		    newQuestion={
// 		    	qid:getRandom(),
// 		      	text:qtext,
// 		      	options:[{uid:getRandom(),value:'Yes'},{uid:getRandom(),value:'No'}]
// 		    }
// 	    else
// 	    	newQuestion={
// 	    		qid:getRandom(),
// 		     	text:qtext,
// 		      	options
// 		    }
// 	    let updatedQuestions=[...squestions];
// 	    updatedQuestions.push(newQuestion);
// 	    setQuestions(updatedQuestions);
//       console.log(questions);
// 	    // history.push("/published");
//   	}

// 	const deleteOptions=()=>{
// 		if(options.length===2)
// 			alert("Error: A select type question should have atleast 2 options");
// 		else
// 		{
// 			let updatedOptions=[...options];
// 			updatedOptions.pop();
// 			setOptions(updatedOptions);
// 		}
// 	}

// 	const updateOptionText=(id,text)=>{
// 		let updatedOptions=[...options];
// 		let changeIndex=updatedOptions.findIndex(x=>x.uid===id);
// 		updatedOptions[changeIndex].value=text;
// 		setOptions(updatedOptions);
// 	}

//   return (
//     <>
//     	<div className="my-3">
//     	<TypeSelector qtype={qtype} setQtype={setQtype} />
//     	{
//     		qtype!==0
// 	    	?
// 		    	<>
// 			    	<Question setQtext={setQtext}/>
// 			    	{
// 			    		qtype===1
// 			    		?
// 			    		<>
// 			    		{options.map((opt,key)=>(
// 				    		<Options key={key} uid={opt.uid} addOptions={addOptions} deleteOptions={deleteOptions} updateOptionText={updateOptionText}/>
// 				    	))}
// 				    	{
// 				    		options.length>=4
// 				    		?
// 				    			<>
// 				    				<button className="btn btn-danger m-1" onClick={addQuestions}>Add Question</button>
// 				    				<button className="btn btn-danger m-1" onClick={publishQuestions}>Publish</button>
// 				    			</>
// 				    		:
// 				    			null
// 				    	}
// 				    	</>
// 				    	:
// 				    	<>
// 				    		<div className="col-md-8 offset-md-2 col-12 input-gray my-3">
// 					    		<input type="text" className="form-control" value="Yes" /><br />
// 					    		<input type="text" className="form-control" value="No" />
//     						</div>
// 		    				<button className="btn btn-danger m-1" onClick={addQuestions}>Add Question</button>
// 		    				<button className="btn btn-danger m-1" onClick={publishQuestions}>Publish</button>
// 				    	</>
// 			    	}	
			    	
// 		    	</>
// 	    	:
// 	    		null
// 	    }
//     	</div>
//     </>
//   );
// }

// export default CreateSurvey;