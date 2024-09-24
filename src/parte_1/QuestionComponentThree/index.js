import React, { useState } from "react";

function EventHandlingComponent() {
  const [message, setMessage] = useState("");

  // Função de tratamento de eventos separada
  function handleClick() {
    setMessage("O botão foi clicado!");
  }

  // Objeto de estilos
  const styles = {
    container: {
      backgroundColor: "#f0f0f0",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    message: {
      marginTop: "20px",
      fontSize: "18px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Tratamento de Eventos em React</h1>
      {/* Botão com evento onClick que chama a função handleClick */}
      <button onClick={handleClick} style={styles.button}>
        Clique Aqui
      </button>
      {/* Exibe a mensagem após o clique */}
      <div style={styles.message}>{message}</div>
    </div>
  );
}

export default EventHandlingComponent;
