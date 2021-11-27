import { takeLatest, put, all, call } from 'redux-saga/effects';
import { deleteTodo } from '../createActions';
import * as action from '../constant';

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodo(id));
}

export function* onDelete() {
  yield takeLatest(action.DELETE_TODO, deleteTodo);
}

export function* todos() {
  yield all([call(deleteTodo)]);
}
