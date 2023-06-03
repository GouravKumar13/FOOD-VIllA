import { useState } from "react";



const Contact = () => {
  const [visibleSection, setVisibleSection] = useState(false);

  const toggleSection = (index) => {
 if (visibleSection === index) {
   return setVisibleSection(null);
  }
  
    setVisibleSection(index);
  }
  return (
    <>
      <h1 className=" font-extrabold text-center p-3 m-3 text-2xl">
        How can we help you?
      </h1>
      <div className="border border-solid border-gray-150 w-96 m-auto">

{data.map((item,index)=>(
  <>
  <div onClick={()=>toggleSection(index)} key={index} className="cursor-pointer flex gap-2 justify-between">
    <h1>{item.Question}</h1>
    <span>{visibleSection===index? "-":"+"}</span>
    </div>
    <div>
      {visibleSection===index?item.Answer:null}
    </div>
    </>
  
))}
    
      </div>
    </>
  );
};
export default Contact;



const data = [
  {
    Question: "How Many days it takes to diliver my order?",
    Answer: "It generaly takes 2-3 days to diliver your order"
  },
  {
    Question: "How Many time it takes to diliver my order?",
    Answer:"It generaly takes 2-3 days to diliver your order"
  }
]