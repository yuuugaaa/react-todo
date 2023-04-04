const style = {
  width: "400px",
  padding: "5px 10px",
  margin: "10px auto",
  color: "white",
  backgroundColor: "#19376d",
  borderRadius: "5px"
};

export const CompleteArea = (props) => {
  const { completeTasks, onClickBack } = props;
  return (
    <div style={style} className="complete-area">
      <p className="title">完了したToDo</p>
      <ul id="complete-list">
        {completeTasks.map((task, i) => {
          return (
            <li key={i} className="ToDo-task">
              {task}
              <button onClick={() => onClickBack(i)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
