import { useState } from "react";

const Section = ({ Question, Answer, isVisible, setIsVisible }) => {
  return (
  
    <div className="border-b border-fuchsia-300 flex flex-col justify-center items-center ">
     
      <h3 className="font-semibold p-1 text-gray-700  ">Q {Question}</h3>
      {/* {isVisible && <p>{Answer}</p>} */}
      {isVisible ? (
        <>
        <p >{Answer}</p> 
        <button onClick={() => setIsVisible()}>^</button>
        </>
      ) : (
        <button className="rotate-180" onClick={() => setIsVisible()}>^</button> 
      )}
    </div>
  );
};

const Contact = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
    <h1 className=" font-extrabold text-center p-3 m-3 text-2xl">
        How can we help you?
      </h1>
    <div className="border border-solid border-gray-150 w-fit flex flex-col items-center m-auto p-6">

      
      <Section
        Question={"How Many days it takes to diliver my order?"}
        Answer={"It generaly takes 2-3 days to diliver your order"}
        isVisible={visibleSection === "diliver"}
        setIsVisible={() =>setVisibleSection("diliver")}
      />
      <Section
        Question={"How Many days it takes to diliver my order?"}
        Answer={"It generaly takes 2-3 days to diliver your order"}
        isVisible={visibleSection === "time"}
        setIsVisible={()=>setVisibleSection("time")}
        
      />
    </div>
    </>
  );
};
export default Contact;
