import React, { useCallback, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

import useDoubleClick from "../hooks/useDoubleClick";
import useTodos from "../reducers/useTodos";

export default function TodoItem({ todo }) {
  const [, { deleteTodo, setLabel, toggleDone }] = useTodos(() => null);

  const [editing, setEditing] = useState(false);

  const onDelete = useCallback(() => deleteTodo(todo.id), [todo.id]);
  const onDone = useCallback(() => toggleDone(todo.id), [todo.id]);
  const onChange = useCallback(event => setLabel(todo.id, event.target.value), [
    todo.id
  ]);

  const handleViewClick = useDoubleClick(null, () => setEditing(true));
  const ref = useRef();
  useOnClickOutside(ref, () => setEditing(false));

  return (
    <li
      className={`${editing ? "editing" : ""} ${todo.done ? "completed" : ""}`}
    >
      <div ref={ref} className="view" onClick={handleViewClick}>
        <input
          type="checkbox"
          className="toggle"
          checked={todo.done}
          onChange={onDone}
        />
        <label>{todo.label}</label>
        <button className="destroy" onClick={onDelete} />
      </div>
      <input className="edit" value={todo.label} onChange={onChange} />
    </li>
  );
}
