import { CREATE_NUMBER } from './types';

export const createNumberAction = body => {
  return { payload: body, type: CREATE_NUMBER };
};

export const deleteNumberAction = body => {
  return { payload: body, type: CREATE_NUMBER };
};
