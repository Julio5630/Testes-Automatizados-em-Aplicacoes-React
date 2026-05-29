import { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Areas from "./sections/Areas";
import Sobre from "./sections/Sobre";
import Formulario from "./sections/Formulario";

function App() {
  const [formVisible, setFormVisible] = useState(true);

  return (
    <>
      <Header />
      <Hero />
      <Areas />
      <Sobre />
      <button type="button" className="form-btn" onClick={() => setFormVisible((visible) => !visible)}>
        {formVisible ? "Ocultar formulário" : "Mostrar formulário"}
      </button>
      {formVisible && <Formulario />}
    </>
  );
}

export default App;


