export class Todo {
    id?: number;
    completed?: boolean;
    text: string;
    date?:  null | string;

    constructor(todo: Todo) {
        this.id = todo.id;
        this.text = todo.text;
        this.completed = todo.completed;
        this.date = todo.date;
      }
}

export type Todos = Todo[];

export interface TodoState {
    todos: Todos;
    loading: boolean;
    error: null | string;
}

export enum TodoActionsTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    ADD_TODO = 'ADD_TODO',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    EDIT_TODO = 'EDIT_TODO',
    EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'
}
interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODO
}
interface FetchTodoActionSuccess {
    type: TodoActionsTypes.FETCH_TODO_SUCCESS;
    payload: any[]
}
interface FetchTodoActionError {
    type: TodoActionsTypes.FETCH_TODO_ERROR;
    payload: string
}

interface TodoActionAdd {
    type: TodoActionsTypes.ADD_TODO;
}
interface TodoActionAddSuccess {
    type: TodoActionsTypes.ADD_TODO_SUCCESS;
    payload: Todo;
}
interface TodoActionDelete {
    type: TodoActionsTypes.DELETE_TODO;
}
interface TodoActionAddDeleteSuccess {
    type: TodoActionsTypes.DELETE_TODO_SUCCESS;
    payload: number;
}
interface TodoActionEdit {
    type: TodoActionsTypes.EDIT_TODO;
}
interface TodoActionAddEditSuccess {
    type: TodoActionsTypes.EDIT_TODO_SUCCESS;
    payload: Todo;
}


export type TodoAction = FetchTodoAction | FetchTodoActionSuccess | FetchTodoActionError | TodoActionAdd 
| TodoActionAddSuccess | TodoActionDelete | TodoActionAddDeleteSuccess | TodoActionEdit | TodoActionAddEditSuccess