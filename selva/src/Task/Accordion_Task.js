import React, { useState } from "react";

function Accordion_Task() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Who are you?",
      answer:
        "I am Selvakarthiga, a third-year Information Technology student."
    },
    {
      question: "What are your technical skills?",
      answer:
        "I am learning HTML, CSS, JavaScript, React, Java and Salesforce."
    },
    {
      question: "What projects have you developed?",
      answer:
        "My projects include Recipes Realm, Smart Library Management and Gas Leakage Detection."
    },
    {
      question: "What is your career goal?",
      answer:
        "My goal is to become a skilled IT professional and build useful applications."
    }
  ];

  return (
    <>
      <style>{
         `.box{       
       width: 500px;
       margin:10px
      padding: 50px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 2px 5px gray;
      }`
        }</style>
      <center>
      <div className="box">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Learn more about me and my work.
        </p>

        <div>
          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <button onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
              >
                {openIndex === index ? "− " : "+ "}
                {item.question}
              </button><br/>

              {openIndex === index && (
                <div >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </center>
    </>
  );
}

export default Accordion_Task;
