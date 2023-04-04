const style = {
  width: "400px",
  padding: "10px",
  margin: "10px auto",
  textAlign: "center",
  backgroundColor: "#0b2447",
  borderRadius: "5px"
};

export const InputArea = (props) => {
  const { inputText, onChange, onClick, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        id="input-text"
        type="text"
        placeholder="ToDoを入力"
        value={inputText}
        onChange={onChange}
        disabled={disabled}
      />
      <button id="add-button" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
