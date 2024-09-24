import React, { useState } from "react";
import { useForm } from "react-hook-form";

function HelloKittyFormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data); // Define os dados submetidos
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

export default HelloKittyFormWithReactHookForm;
