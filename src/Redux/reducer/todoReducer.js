import * as constant from '../constant';

const initialState = {
  formInput: '',
  complete: false,
  startDate: new Date(),
  todo: [],
  filterItem: [],
  isEdit: false,
  editId: null,
};

const todoReducer = (state = initialState, action) => {
  const { formInput, complete, startDate, todo, isEdit, editId } = state;
  if (action.type === constant.HANDLE_FORM_INPUT) {
    const { value } = action.payload;
    return { ...state, formInput: value };
  }

  if (action.type === constant.HANDLE_FORM_CHECKED) {
    return { ...state, complete: !complete };
  }

  if (action.type === constant.HANDLE_FORM_DATE) {
    let { date } = action.payload;
    return { ...state, startDate: date };
  }

  if (action.type === constant.HANDLE_SUBMIT) {
    if (formInput && isEdit) {
      let newEdit = todo.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            complete,
            formInput,
            startDate,
          };
        }
        return item;
      });

      return {
        ...state,
        todo: newEdit,
        isEdit: false,
        editId: null,
        formInput: '',
        complete: false,
        startDate: new Date(),
      };
    } else if (formInput && !isEdit) {
      let newInput = {
        id: new Date().getTime().toString(),
        formInput,
        complete,
        startDate,
      };
      return {
        ...state,
        todo: [...todo, newInput],
        complete: false,
        formInput: '',

        startDate: new Date(),
      };
    } else {
      alert('please Enter the value');
    }
  }

  if (action.type === constant.HANDLE_FILTER) {
    const { value } = action.payload;

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

  if (action.type === constant.HANDLE_UPDATE) {
    const { id } = action.payload;

    let fineOne = todo.find((item) => item.id === id);
    console.log(fineOne);
    return {
      ...state,
      isEdit: true,
      editId: id,
      formInput: fineOne.formInput,
    };
  }
  return state;
};
export default todoReducer;
