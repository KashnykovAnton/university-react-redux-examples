import { createAction } from '@reduxjs/toolkit';
import { CREATE_NUMBER, DELETE_NUMBER } from './types';

export const createNumberAction = createAction(CREATE_NUMBER);

export const deleteNumberAction = createAction(DELETE_NUMBER);
