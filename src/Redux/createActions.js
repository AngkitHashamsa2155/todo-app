import * as action from './constant';

export const handleFormInput = (e) => {
  let value = e.target.value;

  return { type: action.HANDLE_FORM_INPUT, payload: { value } };
};

export const handleFormChecked = () => {
  return { type: action.HANDLE_FORM_CHECKED };
};

export const handleFormDate = (date) => {
  return { type: action.HANDLE_FORM_DATE, payload: { date } };
};

export const handleSubmit = (e) => {
  e.preventDefault();
  return { type: action.HANDLE_SUBMIT };
};
export const handleFilter = (e) => {
  let value = e.target.value;

  return { type: action.HANDLE_FILTER, payload: { value } };
};
