import React, { useState } from "react";

function QuestionComponentTwo({ pergunta, resposta }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const styles = {
    container: {
      backgroundColor: "#f0f4f8",
      padding: "20px",
      borderRadius: "12px",
      margin: "20px auto",
      maxWidth: "700px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
    },
    pergunta: {
      fontSize: "18px",
      color: "#333",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "12px 18px",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
    resposta: {
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      marginTop: "15px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      fontSize: "16px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.pergunta}>{pergunta}</div>
      <button onClick={() => setShowAnswer(!showAnswer)} style={styles.button}>
        {showAnswer ? "Ocultar Resposta" : "Mostrar Resposta"}
      </button>
      {showAnswer && <div style={styles.resposta}>{resposta}</div>}
    </div>
  );
}

export default QuestionComponentTwo;
