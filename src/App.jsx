import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "What does CPU stand for?",
    options: ["Central Processing Unit", "Control Processing Unit", "Computer Personal Unit", "Central Performance Utility"],
    answer: "Central Processing Unit",
    marks: 5
  },
  {
    id: 2,
    text: "Which language is primarily used for web page structure?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    answer: "HTML",
    marks: 5
  },
  {
    id: 3,
    text: "Shortcut key to copy in Windows is?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    answer: "Ctrl + C",
    marks: 5
  },
  {
    id: 4,
    text: "Which of these is an output device?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    answer: "Monitor",
    marks: 5
  },
  {
    id: 5,
    text: "Full form of URL is?",
    options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Locator", "Universal Resource Link"],
    answer: "Uniform Resource Locator",
    marks: 5
  }
];

export default function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Copy/Paste prevention
  window.addEventListener("copy", (e) => {
    e.preventDefault();
    alert("Copy is disabled!");
  });
  window.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Paste is disabled!");
  });

  const handleChange = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score += q.marks;
      }
    });
    return score;
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1>IT Test - 25 Marks</h1>
      {!submitted ? (
        <>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "20px" }}>
              <h3>{q.id}. {q.text}</h3>
              {q.options.map((option) => (
                <div key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      value={option}
                      onChange={() => handleChange(q.id, option)}
                    />{" "}
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} style={{ padding: "10px", background: "blue", color: "white" }}>
            Submit Test
          </button>
        </>
      ) : (
        <div>
          <h2>Your Score: {calculateScore()} / 25</h2>
        </div>
      )}
    </div>
  );
}
