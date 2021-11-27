import * as actions from '../constant';

const initialState = {
  formInput: '',
  complete: false,
  startDate: new Date(),
  todo: [],
  filterItem: [],
};

const todoReducer = (state = initialState, action) => {
  if (action.type === actions.HANDLE_FORM_INPUT) {
    const { value } = action.payload;

    return { ...state, formInput: value };
  }
  if (action.type === actions.HANDLE_FORM_CHECKED) {
    return { ...state, complete: !state.complete };
  }
  return state;
};
export default todoReducer;
