const style = {
  width: "400px",
  padding: "5px 10px",
  margin: "10px auto",
  color: "white",
  backgroundColor: "#576cbc",
  borderRadius: "5px"
};

export const IncompleteArea = (props) => {
  const { incompleteTasks, onClickComplete, onClickDelete } = props;
  return (
    <div style={style} className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul id="incomplete-list">
        {incompleteTasks.map((task, i) => {
          return (
            <li key={i} className="ToDo-task">
              {task}
              <button onClick={() => onClickComplete(i)}>完了</button>
              <button onClick={() => onClickDelete(i)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
