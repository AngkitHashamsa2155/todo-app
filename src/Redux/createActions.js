import * as action from './constant';

export const handleFormInput = (e) => {
  let value = e.target.value;

  return { type: action.HANDLE_FORM_INPUT, payload: { value } };
};

export const handleFormChecked = () => {
  return { type: action.HANDLE_FORM_CHECKED };
};
