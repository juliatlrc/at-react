import React, { useState, useEffect } from "react";

function HelloKittyForm({ initialData = { name: "", email: "", phone: "" } }) {
  const [formData, setFormData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState(null);

  // Atualizar o estado do formulário quando os dados iniciais mudarem
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  // Função para lidar com mudanças no input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Armazena os dados do formulário
  };

  // Estilos com o tema da Hello Kitty
  const styles = {
    container: {
      padding: "30px",
      maxWidth: "400px",
      margin: "50px auto",
      backgroundColor: "#ffe4e1",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: '"Comic Sans MS", "Arial", sans-serif',
    },
    title: {
      color: "#ff69b4",
      fontSize: "24px",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      textAlign: "left",
      marginBottom: "10px",
      color: "#ff1493",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "2px solid #ff69b4",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#ff69b4",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "15px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    result: {
      marginTop: "20px",
      backgroundColor: "#fff0f5",
      padding: "20px",
      borderRadius: "10px",
      color: "#333",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello Kitty Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Digite seu nome"
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Digite seu email"
        />

        <label style={styles.label}>Telefone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Digite seu telefone"
        />

        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>

      {submittedData && (
        <div style={styles.result}>
          <h3>Dados Submetidos:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HelloKittyForm;
