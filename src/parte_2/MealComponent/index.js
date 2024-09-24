import React, { useState, useEffect } from "react";

function MealCategories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.error("Erro ao buscar as categorias:", error));
  }, []);

  const handleCategoryChange = (event) => {
    const category = categories.find(
      (cat) => cat.strCategory === event.target.value
    );
    setSelectedCategory(category);
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    dropdown: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      width: "100%",
      marginBottom: "20px",
    },
    image: {
      width: "300px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    description: {
      fontSize: "16px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Selecione uma Categoria de Prato</h1>
      <select onChange={handleCategoryChange} style={styles.dropdown}>
        <option value="">Escolha uma categoria</option>
        {categories.map((category) => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <img
            src={selectedCategory.strCategoryThumb}
            alt={selectedCategory.strCategory}
            style={styles.image}
          />
          <p style={styles.description}>
            {selectedCategory.strCategoryDescription}
          </p>
        </>
      )}
    </div>
  );
}

export default MealCategories;
