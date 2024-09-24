import React, { useState, useEffect } from "react";

function UserRoleToggle({ initialAdminState = false }) {
  const [isAdmin, setIsAdmin] = useState(initialAdminState);

  // Atualizar o estado do checkbox quando a prop mudar
  useEffect(() => {
    setIsAdmin(initialAdminState);
  }, [initialAdminState]);

  // Função de tratamento do evento de clique no checkbox
  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  // Estilos como objeto
  const styles = {
    container: {
      padding: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    checkboxLabel: {
      fontSize: "18px",
      marginRight: "10px",
    },
    message: {
      marginTop: "20px",
      fontSize: "16px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={handleCheckboxChange}
        />
        <span style={styles.checkboxLabel}>Administrador</span>
      </label>

      <div style={styles.message}>
        {isAdmin
          ? "O usuário atual é Administrador"
          : "O usuário atual é Colaborador"}
      </div>
    </div>
  );
}

export default UserRoleToggle;
