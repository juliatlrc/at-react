import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ReactStyledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data); // Define os dados submetidos
  };

  // Estilos com tema moderno e interações de hover e animação
  const styles = {
    container: {
      padding: "40px",
      maxWidth: "500px",
      margin: "50px auto",
      backgroundColor: "#282c34",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
      fontFamily: "Arial, sans-serif",
      color: "white",
    },
    title: {
      color: "#61dafb",
      fontSize: "28px",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      textAlign: "left",
      marginBottom: "10px",
      color: "#61dafb",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "5px",
      borderRadius: "10px",
      border: "2px solid #61dafb",
      fontSize: "16px",
      transition: "border-color 0.3s ease",
      color: "#282c34",
    },
    inputFocus: {
      borderColor: "#61dafb",
    },
    inputHover: {
      borderColor: "#888",
    },
    error: {
      color: "red",
      fontSize: "14px",
      marginBottom: "15px",
      textAlign: "left",
    },
    button: {
      backgroundColor: "#61dafb",
      color: "black",
      padding: "10px 20px",
      border: "none",
      borderRadius: "15px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "transform 0.3s ease, background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#21a1f1",
      transform: "translateY(-5px)",
    },
    result: {
      marginTop: "20px",
      backgroundColor: "#1c1e22",
      padding: "20px",
      borderRadius: "10px",
      color: "#61dafb",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={styles.label}>Nome:</label>
        <input
          type="text"
          {...register("name", { required: "O nome é obrigatório" })}
          style={styles.input}
          placeholder="Digite seu nome"
        />
        {errors.name && <div style={styles.error}>{errors.name.message}</div>}

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de email inválido",
            },
          })}
          style={styles.input}
          placeholder="Digite seu email"
        />
        {errors.email && <div style={styles.error}>{errors.email.message}</div>}

        <label style={styles.label}>Telefone:</label>
        <input
          type="tel"
          {...register("phone", {
            pattern: {
              value: /^\d+$/,
              message: "O telefone deve conter apenas números",
            },
          })}
          style={styles.input}
          placeholder="Digite seu telefone (opcional)"
        />
        {errors.phone && <div style={styles.error}>{errors.phone.message}</div>}

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.transform = styles.buttonHover.transform)
          }
          onMouseLeave={(e) => (e.target.style.transform = "none")}
        >
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

export default ReactStyledForm;
