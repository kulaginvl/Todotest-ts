import React from 'react';
import { useDispatch } from 'react-redux';
import { AddField } from './components/Tasks/AddField';
import { EditTask } from './components/Tasks/EditTask';
import { TaskItem } from './components/Tasks/TaskItem';
import { useTypedSelector } from './hooks/useTypedSelector';
import { addTodos, deleteTodos, editTodos, fetchTodos } from './redux/store/actions/todo';
import { Todo } from './redux/types';

export const App = () => {
  const [edit, setEdit] = React.useState(false);
  const [selectTask, setSelectTask] = React.useState<Todo>({
    text: '',
    completed: false,
    date: new Date().toLocaleString(),
  });

  const { todos, loading, error } = useTypedSelector((state) => state.todo);

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchTodos(dispatch);
  }, [dispatch]);

  const delTask = (id: number) => deleteTodos(id, dispatch);

  const newTask = (todo: Todo) => addTodos(todo, dispatch);

  const editTask = (todo: Todo) => editTodos(todo, dispatch);

  const handleEditTask = (todo: Todo) => {
    setEdit(true);
    setSelectTask(todo);
  };

  const closeEditTask = () => {
    setEdit(false);
  };

  if (loading) {
    <h1>Load...</h1>;
  } else {
    <h1>{error}</h1>;
  }

  return (
    <div className="task__wrappper">
      <div className="task__header">
        <h1>Task</h1>
      </div>
      <div className="task__content">
        <AddField todos={todos} onSubmit={newTask} />
        <div className="task__list">
          {todos.map((todo) => (
            <TaskItem
              key={todo.id}
              todo={todo}
              deleteTask={delTask}
              onEditMenu={handleEditTask}
              onEditTask={editTask}
            />
          ))}
          <EditTask edTask={editTask} clTask={closeEditTask} opTask={edit} todo={selectTask} />
        </div>
      </div>
    </div>
  );
};
