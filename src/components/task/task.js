import React from "react";

import "./task.css";

function Task({ description, time, onDeleted, onToggleDone }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onToggleDone} />
      <label>
        <span className="description"> {description} </span>
        <span className="created"> created {time} ago </span>
      </label>
      <button type="button" aria-label="Edit" className="icon icon-edit" />
      <button type="button" aria-label="Delete" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
};

export default Task;
