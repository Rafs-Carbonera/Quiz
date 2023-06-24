import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./EndGame.css";

const EndGame = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="endgame">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <button
        className="end-game-button"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default EndGame;
