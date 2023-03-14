import React from "react";

const TaskPreview = ({ taskArray }) => {
  return (
    <div className="taskComponent">
      {taskArray.map((task) => {
        return (
          <ul className="skill" key={task.id}>
            {task.text}
          </ul>
        );
      })}
    </div>
  );
};

export default TaskPreview;
