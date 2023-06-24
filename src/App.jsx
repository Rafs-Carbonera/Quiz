import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import EndGame from "./components/EndGame";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
    //embaralhar perguntas
    dispatch({ type: "REORDER_OPTIONS" });
  }, []);

  return (
    <div className="app">
      <h1>Quiz</h1>

      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <EndGame />}
    </div>
  );
}

export default App;
