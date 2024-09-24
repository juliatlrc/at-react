import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const generatedProducts = [];
    for (let i = 0; i < 100; i++) {
      generatedProducts.push(faker.commerce.productName());
    }
    setProducts(generatedProducts);
  }, []);

  // Função para lidar com a entrada do usuário
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar a lista de produtos com base no termo de pesquisa
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      width: "100%",
      marginBottom: "20px",
    },
    productList: {
      listStyle: "none",
      padding: 0,
    },
    productItem: {
      padding: "10px",
      backgroundColor: "#f9f9f9",
      marginBottom: "10px",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Filtrar Produtos</h1>
      <input
        type="text"
        placeholder="Digite para filtrar produtos..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.input}
      />
      <ul style={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index} style={styles.productItem}>
              {product}
            </li>
          ))
        ) : (
          <li style={styles.productItem}>Nenhum produto encontrado</li>
        )}
      </ul>
    </div>
  );
}

export default ProductFilter;
