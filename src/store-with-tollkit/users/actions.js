import { createAction } from '@reduxjs/toolkit';
import { CREATE_NEW_USER, DELETE_USER, UPDATE_USER } from './types';

export const createUserAction = createAction(CREATE_NEW_USER);

export const updateUserAction = createAction(UPDATE_USER);

export const deleteUserAction = createAction(DELETE_USER);

// createUserAction('Mary')
