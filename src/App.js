import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HelloKittyForm from "./parte_3/HelloKitty";
import HelloKittyFormWithReactHookForm from "./parte_3/HelloKittyHookForm";
import HelloKittyFormWithValidation from "./parte_3/HelloKittyValidations";
import ReactStyledForm from "./parte_3/ReactFormValidatorHook";
import EventHandlingComponent from "./parte_1/QuestionComponentThree";
import QuestionComponentTwo from "./parte_1/QuestionComponentTwo";
import ProductFilter from "./parte_2/ProductsComponent";
import QuestionComponent from "./parte_1/QuestionComponentOne/index";
import CountryDropdown from "./parte_2/CountryDropDown/index";
import MealCategories from "./parte_2/MealComponent/index";
import UserRoleToggle from "./parte_2/QuestionOne/index"; // Importar o componente UserRoleToggle

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    navbar: {
      backgroundColor: "#333",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    menuButton: {
      backgroundColor: "#f39c12",
      border: "none",
      color: "white",
      padding: "10px 15px",
      fontSize: "18px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    menuButtonHover: {
      backgroundColor: "#e67e22",
    },
    menuContainer: {
      display: isMenuOpen ? "block" : "none",
      backgroundColor: "#282c34",
      position: "absolute",
      top: "60px",
      left: 0,
      width: "100%",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      padding: "20px",
    },
    menu: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      display: "block",
      padding: "10px 15px",
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
      transition: "background-color 0.3s ease",
    },
    menuItemHover: {
      backgroundColor: "#f39c12",
      color: "#fff",
    },
  };

  return (
    <Router>
      <nav style={styles.navbar}>
        <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}>
          AT DR4 Menu
        </h1>
        <button
          style={styles.menuButton}
          onClick={toggleMenu}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.menuButtonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.menuButton.backgroundColor)
          }
        >
          Menu
        </button>
      </nav>

      {isMenuOpen && (
        <div style={styles.menuContainer}>
          <ul style={styles.menu}>
            <li>
              <Link to="/questao1.1" style={styles.menuItem}>
                DIV OCULTA / DIV APARENTE
              </Link>
            </li>
            <li>
              <Link to="/questao1.2" style={styles.menuItem}>
                INLINE EVENT
              </Link>
            </li>
            <li>
              <Link to="/questao1.3" style={styles.menuItem}>
                TRATAMENTO DE EVENTOS
              </Link>
            </li>
            <li>
              <Link to="/questao1.4" style={styles.menuItem}>
                DESVANTAGENS INLINE EVENT
              </Link>
            </li>
            <li>
              <Link to="/questao2.2" style={styles.menuItem}>
                PAÍSES DO MUNDO
              </Link>
            </li>
            <li>
              <Link to="/questao2.3" style={styles.menuItem}>
                PRODUTOS FAKER
              </Link>
            </li>
            <li>
              <Link to="/questao2.4" style={styles.menuItem}>
                PRATOS RESTAURANTE
              </Link>
            </li>
            <li>
              <Link to="/questao3.1" style={styles.menuItem}>
                FORM COM HOOK STATE
              </Link>
            </li>
            <li>
              <Link to="/questao3.2" style={styles.menuItem}>
                VALIDAÇÕES FORM
              </Link>
            </li>
            <li>
              <Link to="/questao3.3" style={styles.menuItem}>
                REACT HOOK FORM
              </Link>
            </li>
            <li>
              <Link to="/questao3.4" style={styles.menuItem}>
                REACT HOOK FORM E SUAS VALIDAÇÕES
              </Link>
            </li>
            <li>
              <Link to="/formulario-preenchido" style={styles.menuItem}>
                Formulário Preenchido
              </Link>
            </li>
            <li>
              <Link
                to="/admin-ligado"
                style={styles.menuItem}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.menuItemHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                Administrador Ligado
              </Link>
            </li>
            <li>
              <Link
                to="/admin-desligado"
                style={styles.menuItem}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.menuItemHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                Administrador Desligado
              </Link>
            </li>
            <li>
              <Link to="/pais-brasil" style={styles.menuItem}>
                País: Brasil
              </Link>
            </li>
          </ul>
        </div>
      )}

      <Routes>
        <Route
          path="/questao1.1"
          element={
            <QuestionComponent pergunta="Quem sou eu?" resposta="Julia" />
          }
        />
        <Route path="/questao1.2" element={<QuestionComponentTwo />} />
        <Route path="/questao1.3" element={<EventHandlingComponent />} />
        <Route
          path="/questao1.4"
          element={
            <QuestionComponent
              pergunta="Desvantagem do inline event"
              resposta="As desvantagens de inline events incluem a organização do código, que se torna menos clara, pois a lógica do evento fica misturada com o HTML ou JSX, o que pode dificultar a leitura e a manutenção, especialmente em projetos maiores. Além disso, o código não é reutilizável, já que a função está diretamente associada ao elemento, exigindo duplicação caso precise ser usada em outros lugares. Isso também dificulta a manutenção, já que qualquer alteração deve ser feita diretamente no HTML. Por fim, pode impactar o desempenho quando há muitos eventos semelhantes no código."
            />
          }
        />
        <Route path="/questao2.2" element={<CountryDropdown />} />
        <Route path="/questao2.3" element={<ProductFilter />} />
        <Route path="/questao2.4" element={<MealCategories />} />
        <Route path="/questao3.1" element={<HelloKittyForm />} />
        <Route path="/questao3.2" element={<HelloKittyFormWithValidation />} />
        <Route
          path="/questao3.3"
          element={<HelloKittyFormWithReactHookForm />}
        />
        <Route path="/questao3.4" element={<ReactStyledForm />} />
        <Route
          path="/admin-ligado"
          element={<UserRoleToggle initialAdminState={true} />}
        />
        <Route
          path="/admin-desligado"
          element={<UserRoleToggle initialAdminState={false} />}
        />
        <Route
          path="/pais-brasil"
          element={<CountryDropdown initialCountry="Brazil" />}
        />
        <Route
          path="/formulario-preenchido"
          element={
            <HelloKittyForm
              initialData={{
                name: "Julia",
                email: "julia@example.com",
                phone: "123456789",
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
