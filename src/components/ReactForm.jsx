import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormResponse from "./FormResponse";

function ReactForm() {
  const [question, setQuestion] = useState("");
  const [searchDisplay, setSearchDisplay] = useState(
    JSON.parse(localStorage.getItem("savedPrompt")) || []
  );
  const sendQuestion = (e) => {
    e.preventDefault();
    const data = {
      prompt: question,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        let saveResponse = { question: question, answer: data.choices[0].text };
        let allResponses = searchDisplay.concat([saveResponse]);
        setSearchDisplay(allResponses);
        localStorage.setItem("savedPrompt", JSON.stringify(allResponses));
      });
  };

  return (
    <div>
      <Form onSubmit={sendQuestion}>
        <Form.Group className="mb-3">
          <Form.Label>Ask me anything</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>
        <h1>Past responses:</h1>
        {searchDisplay.map((search, index) => {
          return (
            <FormResponse
              key={index}
              question={search.question}
              answer={search.answer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReactForm;
