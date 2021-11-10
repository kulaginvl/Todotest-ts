import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'react'
import { Todo, TodoAction, TodoActionsTypes } from '../../types'



export const fetchTodos = async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODO})
            const resp = await axios.get('http://localhost:3001/todos')
            dispatch({type: TodoActionsTypes.FETCH_TODO_SUCCESS, payload: resp.data})
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, 
                payload: 'Error Todo'
            })
        }
} 


export const addTodos = async (todo: Todo, dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionsTypes.ADD_TODO})
        try {
            await axios
            .post<Todo>('http://localhost:3001/todos', todo)
            .then((res : AxiosResponse) => {
                dispatch({
                    type:  TodoActionsTypes.ADD_TODO_SUCCESS,
                    payload: new Todo(res.data)
                })
            })
            
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, 
                payload: 'Error Add'
            })
        }
    } 

 

export const deleteTodos = async (id: number, dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionsTypes.DELETE_TODO})
        try {
            await axios
            .delete('http://localhost:3001/todos/' + id)
            .then(() => {
                dispatch({type: TodoActionsTypes.DELETE_TODO_SUCCESS,
                        payload: id,
                })
            })
            
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, 
                payload: 'Error Delete'
            })
        }  
}

export const editTodos = async (todo: Todo, dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActionsTypes.EDIT_TODO})
        try {
            const id = todo.id
            if(id) {
                await axios
                .put('http://localhost:3001/todos/' + id, todo)
                .then((res: AxiosResponse) => {
                    dispatch({type: TodoActionsTypes.EDIT_TODO_SUCCESS,
                            payload: new Todo(res.data),
                    })
                })
            }
            
        } catch (e) {
            dispatch({type: TodoActionsTypes.FETCH_TODO_ERROR, 
                payload: 'Error Edit'
            })
        }  
}


