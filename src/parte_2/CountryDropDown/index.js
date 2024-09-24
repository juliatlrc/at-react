import React, { useState, useEffect } from "react";

function CountryDropdown({ initialCountry = "" }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);

  // Função para buscar os países da API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Ordena os países por nome
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Erro ao buscar os países:", error));
  }, []);

  // Atualiza o país selecionado quando a prop initialCountry muda
  useEffect(() => {
    setSelectedCountry(initialCountry);
  }, [initialCountry]);

  // Função para lidar com a mudança no dropdown
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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
    dropdown: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      width: "100%",
    },
    message: {
      marginTop: "20px",
      fontSize: "16px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Selecione um país</h1>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        style={styles.dropdown}
      >
        <option value="">Selecione um país</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <div style={styles.message}>País selecionado: {selectedCountry}</div>
      )}
    </div>
  );
}

export default CountryDropdown;
