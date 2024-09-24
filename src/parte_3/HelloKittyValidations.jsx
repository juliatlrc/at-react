import React, { useState } from "react";

function HelloKittyFormWithValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Função para lidar com mudanças no input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para validar o formulário
  const validateForm = () => {
    const newErrors = {};

    // Validação para o nome (obrigatório)
    if (!formData.name) {
      newErrors.name = "O nome é obrigatório.";
    }

    // Validação para o email (obrigatório)
    if (!formData.email) {
      newErrors.email = "O email é obrigatório.";
    }

    // Validação para o telefone (deve ser numérico se informado)
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "O telefone deve conter apenas números.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData); // Armazena os dados do formulário se válido
      setFormData({ name: "", email: "", phone: "" }); // Limpa o formulário
      setErrors({}); // Limpa os erros após o envio
    }
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
      marginBottom: "5px",
      borderRadius: "10px",
      border: "2px solid #ff69b4",
      fontSize: "16px",
    },
    error: {
      color: "red",
      fontSize: "14px",
      marginBottom: "15px",
      textAlign: "left",
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
        {errors.name && <div style={styles.error}>{errors.name}</div>}

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Digite seu email"
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}

        <label style={styles.label}>Telefone (opcional):</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Digite seu telefone"
        />
        {errors.phone && <div style={styles.error}>{errors.phone}</div>}

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

export default HelloKittyFormWithValidation;
