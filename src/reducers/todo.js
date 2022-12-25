// const [todoList, setTodoList] = useState([]);
const initialState = {
  todoList: [], // todoList
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      const { id, data } = action.payload;
      return {
        // setTodoList
        ...state, // get initialState data
        todoList: [
          ...state.todoList, // get initial todoList data
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DEL_TODOS":
      const newList = state.todoList.filter((el) => el.id != action.payload);
      return {
        ...state,
        todoList: newList,
      };

    case "REMOVE_TODOS":
      return {
        ...state,
        todoList: [],
      };

    default:
      return state;
  }
};
