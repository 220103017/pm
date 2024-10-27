import React from "react";

const AiResponse = ({ response }) => {
  return (
    <div className="ai-response">
      <h3>AI Response</h3>
      <p>{response || "No response yet."}</p>
    </div>
  );
};

export default AiResponse;
