import { MemoryRouter as Router } from 'react-router-dom';
import React, { useEffect, useState, useTransition } from 'react';



import './App.css';
import text from "../.././assets/test.jpg"
import quizeIcon from "../.././assets/quizeicon.png"


let dataofquestion = [
  {
    question: "What is a machine",
    questionnumber:1,
    options: [
      "Machine is a productive tool",
      "Machine is a thing that helps humans work efficiently",
      "Machine is a name",
    ],
    Answer: "Machine is a productive tool",
  },
  {
    question: "What is a computer",
    questionnumber:2,
    options: [
      "computer is the machine",
      "Computer is the name of animal",
      "Computer is the type of car",
    ],
    Answer: "computer is the machine",
  },
  {
    question: "What is a iterator in Js",
    questionnumber:3,
    options: [
      "Iterator which iterator over the value",
      "Iterator is a method of javascript",
      "Iterator is the seconde name of ajvascript",
    ],
    Answer: "Iterator which iterator over the value",
  },
  {
    question: "Who is the founder of Islam",
    questionnumber:4,
    options: [
      "Prophet Muhamad PBUH",
      "Prophet Moses",
      "Prophet jesus ",
    ],
    Answer: "Prophet Muhamad PBUH",
  },
  {
    question: "What is computer softwear",
    questionnumber:5,
    options: [
      "A computer is the softwear  which the instruct the computer",
      "A computer enterttainment concert ",
      "A computer si computer language ",
    ],
    Answer: "A computer is the softwear  which the instruct the computer",
  },


];































function Hello() {

   // this is for get the answer of user 
  let [userAnwser , setuserAnwser] = useState([])

  // this is for getting wronge answer
  let [wrongAnswer  ] = useState([])
  let [Score , setscore ] = useState(0)

  // this will change the question 
  let [Changequestion , setchangequestion] = useState(0)

  // this will change the ui 
  let [numberarray, setnumberarray] = useState(0);

  
  // this is for getting the input valu of password checking or taking
  let [value, setvalue] = useState('');

 // this will change the color border color of input
  let [color , setcolor] = useState("white")

           

 
 
 
 // this function is for passoword checking
 
  let foo = (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    // Use e.target.value directly or use the updated state value
    if (e.target.value === "baqarzafar" || value === "baqarzafar") {
      setnumberarray(numberarray = 3 );
    }
    else if(e.target.value !="baqarzafar"){
      setcolor("blue")
    }
  };


















  
  
// This is function for gettin answer
let fooon = (Answer)=>{


  /// this is for ending of array of question
  if(Changequestion < dataofquestion.length -1 ){
    setchangequestion(Changequestion+=1)
    
  }
  else{
    setnumberarray(numberarray+=1)
  }

  // This is for push the answer of user 

  userAnwser.push(Answer)











  // this is will check whether the user question is correct or not

for(let i = 0 ; i < dataofquestion.length ; i++ ){


if(Answer === dataofquestion[i].Answer){

 setscore(Score+=1)

 

}



}










}











  let Test = (
    <div>
      <h1>{dataofquestion[Changequestion].question + "      ? "}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {dataofquestion[Changequestion].options.map((value, index) => (
          <button  onClick={()=>{ fooon(value)}}       key={index} style={{ margin: "10%" }}>{value}</button>
        ))}
      </div>
    </div>
  );

  let authentication = (
    <div>
      <h1>Please enter the password</h1>
      <form onSubmit={foo}>
        <input
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          type='password'
          style={{ padding: "3%", fontSize: "20px"  , border:`5px solid ${color}`, background:"none" }}
        />
     
      </form>
    </div>
  );



  

  let result = <div>

<h2>
    Total score is  {Score}


{wrongAnswer.map((value)=>{
  return(
    <p>{value}</p>
  )
})}
    
</h2>


  </div>





let welcome_message  = <h1> Welcome to  Great quize Application </h1>



// this is for  welcome message 

   let time =     setTimeout(() => {
  setnumberarray(numberarray+=1)
  
}, 3000 );

if(numberarray> 0){
 clearTimeout(time)
}

// this is form where can create quize question and option with answer



const [quizData, setQuizData] = useState({
  question: '',
  option1: '',
  option2: '',
  option3: '',
  answer: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setQuizData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Access the values in quizData object
  console.log('Quiz Data:', quizData);
  // You can now perform further actions, such as sending the data to an API or processing it.
};

    let selectquiz = <div id="selectquiz">
    <form onSubmit={handleSubmit}>
      <div>
        <span>Question</span>
        <input
          type="text"
          name="question"
          value={quizData.question}
          placeholder="Question"
          style={{ background: "none" }}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <span>Option 1</span>
        <input
          type="text"
          name="option1"
          value={quizData.option1}
          placeholder="Option 1"
          style={{ background: "none" }}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <span>Option 2</span>
        <input
          type="text"
          name="option2"
          value={quizData.option2}
          placeholder="Option 2"
          style={{ background: "none" }}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <span>Option 3</span>
        <input
          type="text"
          name="option3"
          value={quizData.option3}
          placeholder="Option 3"
          style={{ background: "none" }}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <span>Answer</span>
        <input
          type="text"
          name="answer"
          value={quizData.answer}
          placeholder="Answer"
          style={{ background: "none" }}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>




  let UserInterfacearray =

    [ welcome_message  , Test  , result , selectquiz ,authentication];


  return (


 /// this is for edit quize question  

 <div>






   <div style={{alignContent:"center" , alignItems:"center" , display:"flex"}}>

     <img 
      
      onClick={()=>{    clearTimeout(time)
      const    index   =       UserInterfacearray.indexOf(authentication) 
      setnumberarray(numberarray= index)
    
    
    
    }} style={{width:"6%" }} src={text}></img>



   

 
    
    
















<img 
    onClick={()=>{


      setnumberarray(numberarray=1)
    }}
    style={{width:"4%"}}  src={quizeIcon }></img>
   </div>

   





   <div style={{display:"flex" , alignContent:"center" , justifyContent:"center" , alignItems:"center"}}>
   <div className="Hello">
    {UserInterfacearray[numberarray]}
  </div>
 
 
 
 </div>
 </div>
  );
}

























/// this is   a    app  component
export default function App() {
  return (
    <Router>
      <Hello />
    </Router>
  );
}