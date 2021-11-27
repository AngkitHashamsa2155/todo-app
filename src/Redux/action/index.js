import { createActions } from 'redux-actions'

import * as constant from '../constant'

export const handleSubmit = createActions(constant.HANDLE_SUBMIT)

export const handleFilter = createActions(constant.HANDLE_FILTER)
export const handleFormInput = createActions(constant.HANDLE_FORM_INPUT)
