import * as constant from '../constant';

const initialState = {
  formInput: '',
  complete: false,
  startDate: new Date(),
  todo: [],
  filterItem: [],
};

const todoReducer = (state = initialState, action) => {
  if (action.type === constant.HANDLE_FORM_INPUT) {
    const { value } = action.payload;

    return { ...state, formInput: value };
  }
  if (action.type === constant.HANDLE_FORM_CHECKED) {
    return { ...state, complete: !state.complete };
  }
  if (action.type === constant.HANDLE_FORM_DATE) {
    let { date } = action.payload;
    return { ...state, startDate: date };
  }
  if (action.type === constant.HANDLE_SUBMIT) {
    const { formInput, complete, startDate, todo } = state;
    if (formInput) {
      let newInput = {
        id: new Date().getTime().toString(),
        formInput,
        complete,
        startDate,
      };
      return {
        ...state,
        todo: [...state.todo, newInput],
        complete: false,
        formInput: '',
        complete: false,
        startDate: new Date(),
      };
    } else {
      alert('please Enter the value');
    }
  }
  if (action.type === constant.HANDLE_FILTER) {
    const { value } = action.payload;
    const { todo } = state;
    let tempValue = [];
    if (value === 'all') {
      return { ...state, filterItem: [...todo] };
    }
    if (value === 'incomplete') {
      tempValue = todo.filter((item) => item.complete === false);
      return { ...state, filterItem: tempValue };
    }
    if (value === 'completed') {
      tempValue = todo.filter((item) => item.complete === true);
      return { ...state, filterItem: tempValue };
    }
  }
  if (action.type === constant.HANDLE_TABLE_DATA) {
    const { todo } = state;
    return { ...state, filterItem: [...todo] };
  }
  if (action.type === constant.DELETE_TODO) {
    const { id } = action.payload;
    let newData = state.filterItem.filter((item) => item.id !== id);
    let newTodo = state.todo.filter((item) => item.id !== id);
    return { ...state, filterItem: newData, todo: newTodo };
  }
  return state;
};
export default todoReducer;
