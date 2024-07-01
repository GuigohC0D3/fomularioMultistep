// Components
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import ThanksForm from "./components/ThanksForm";

// Hooks
import { useForm } from "./hooks/useForm";

import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <ThanksForm />];

  const {currentStep, currentComponent} = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo par
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button">
              <SlArrowLeft />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <SlArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
