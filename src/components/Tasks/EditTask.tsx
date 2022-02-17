import React, { FC, KeyboardEvent } from 'react';
import { onKeyEnter } from '../../helpers/onKeyEnter';
import { Todo } from '../../redux/types';

interface EditTaskType {
  todo: Todo;
  opTask: boolean;
  edTask: (todo: Todo) => void;
  clTask: () => void;
  addCopyText: (text: string) => void;
}

export const EditTask: FC<EditTaskType> = ({ edTask, opTask, clTask, todo, addCopyText }) => {
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    setTerm(todo.text);
  }, [todo]);

  const handleEdit = () => {
    if (todo && term) {
      edTask({ ...todo, date: new Date().toLocaleString(), text: term });
      clTask();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyEnter(e, handleEdit);
  };
  const handleCopyText = () => {
    addCopyText(term);
    clTask();
  };

  return (
    <>
      {opTask && (
        <div className="task-edit">
          <div className="task-edit-block">
            <input
              className="task-edit__text"
              value={term}
              onChange={handleInput}
              onKeyUp={handleKeyUp}
            />
            <button className="button" onClick={clTask}>
              close
            </button>
            <button className="button" onClick={handleEdit}>
              save
            </button>
            <button className="button" onClick={handleCopyText}>
              copy
            </button>
          </div>
        </div>
      )}
    </>
  );
};
