import React, { FC } from 'react';
import { Todo } from '../../redux/types';

interface EditTaskType {
  todo: Todo;
  opTask: boolean;
  edTask: (todo: Todo) => void;
  clTask: () => void;
}

export const EditTask: FC<EditTaskType> = ({ edTask, opTask, clTask, todo }) => {
  const [term, setTerm] = React.useState('');

  const handleEdit = () => {
    if (todo && term) {
      edTask({ ...todo, date: new Date().toLocaleString(), text: term });
      clTask();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  return (
    <div className="task-edit">
      {opTask && (
        <div className="task-edit-block">
          <input
            className="task-edit__text"
            defaultValue={todo.text || ''}
            onChange={handleInput}
          />
          <button className="button" onClick={clTask}>
            close
          </button>
          <button className="button" onClick={handleEdit}>
            save
          </button>
        </div>
      )}
    </div>
  );
};
