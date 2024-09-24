import React, { useState } from "react";

function QuestionComponent({ pergunta, resposta }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Objeto de estilos
  const styles = {
    container: {
      border: "1px solid #ddd",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px",
      maxWidth: "600px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    pergunta: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "10px",
    },
    resposta: {
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "4px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.pergunta}>{pergunta}</div>
      <button onClick={toggleAnswer} style={styles.button}>
        {showAnswer ? "Ocultar Resposta" : "Mostrar Resposta"}
      </button>
      {showAnswer && <div style={styles.resposta}>{resposta}</div>}
    </div>
  );
}

export default QuestionComponent;
