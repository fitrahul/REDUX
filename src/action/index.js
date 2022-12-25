// action: object and action creator: pure function
export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const incNumber = (data) => {
    return {
        type: "INCREMENT",
        payload: data
    }
}

export const addTodos = (data) => {
    return {
        type: "ADD_TODOS",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const delTodos = (id) => {
    return {
        type: "DEL_TODOS",
        payload: id
    }
}

export const removeTodos = () => {
    return {
        type: "REMOVE_TODOS"
    }
}
