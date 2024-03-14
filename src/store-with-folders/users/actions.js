import { CREATE_NEW_USER } from './types';

export const createUserAction = body => {
  return { payload: body, type: CREATE_NEW_USER };
};

export const updateUserAction = body => {
  return { payload: body, type: CREATE_NEW_USER };
};

export const deleteUserAction = body => {
  return { payload: body, type: CREATE_NEW_USER };
};
