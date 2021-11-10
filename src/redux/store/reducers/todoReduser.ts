import { Todo, TodoAction, TodoActionsTypes, TodoState } from "../../types";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
}

export const todoReduser = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionsTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionsTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionsTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionsTypes.ADD_TODO:
            return {...state,loading: true}
        case TodoActionsTypes.DELETE_TODO:
            return {...state,loading: true}
        case TodoActionsTypes.ADD_TODO_SUCCESS:
            return {...state,todos: [...state.todos, action.payload],loading: false}
        case TodoActionsTypes.DELETE_TODO_SUCCESS:
            return {...state,todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),loading: false}
        case TodoActionsTypes.EDIT_TODO:
            return {...state,loading: true}
        case TodoActionsTypes.EDIT_TODO_SUCCESS:
            return {...state,loading: false, todos: state.todos.map((todo: Todo) => {
                if(todo.id === action.payload.id){
                    todo = action.payload
                }
                return todo;
            })}
        default: 
            return state
    }
}