import { useState } from "react";
import "./styles.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const onChangeInputText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newIncompleteTasks = [...incompleteTasks, inputText];
    setIncompleteTasks(newIncompleteTasks);
    setInputText("");
  };

  const onClickDelete = (i) => {
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(i, 1);
    setIncompleteTasks(newIncompleteTasks);
  };

  const onClickComplete = (i) => {
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(i, 1);
    const newCompleteTasks = [...completeTasks, incompleteTasks[i]];
    setIncompleteTasks(newIncompleteTasks);
    setCompleteTasks(newCompleteTasks);
  };

  const onClickBack = (i) => {
    const newIncompleteTasks = [...incompleteTasks, completeTasks[i]];
    const newCompleteTasks = [...completeTasks];
    newCompleteTasks.splice(i, 1);
    setIncompleteTasks(newIncompleteTasks);
    setCompleteTasks(newCompleteTasks);
  };

  return (
    <>
      <InputArea
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        disabled={incompleteTasks.length >= 5}
      />

      {incompleteTasks.length >= 5 && (
        <p className="alert-text">
          登録可能なタスクの上限は5個です。タスクを消化して下さい。
        </p>
      )}

      <IncompleteArea
        incompleteTasks={incompleteTasks}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteArea completeTasks={completeTasks} onClickBack={onClickBack} />
    </>
  );
};
