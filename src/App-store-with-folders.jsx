import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { CREATE_NUMBER } from 'store-with-folders/number/types';
import { CREATE_NEW_USER } from 'store-with-folders/users/types';
import { createNumberAction } from 'store-with-folders/number/actions';
import { createUserAction } from 'store-with-folders/users/actions';

export const App = () => {
  const { number } = useSelector(state => state.number);
  const dispatch = useDispatch();
  console.log('number: ', number);

  const { users } = useSelector(state => state.users);
  console.log('users: ', users);

  // useEffect(() => {
  //   dispatch({ payload: '123', type: 'createNumber' });
  //   dispatch({ payload: 'Mary', type: 'createNewUser' });
  // }, [dispatch]);

  // --- With type const
  // useEffect(() => {
  //   dispatch({ payload: '123', type: CREATE_NUMBER });
  //   dispatch({ payload: 'Mary', type: CREATE_NEW_USER });
  // }, [dispatch]);

  // --- With action functions
  useEffect(() => {
    dispatch(createNumberAction('123'));
    dispatch(createUserAction('Mary'));
  }, [dispatch]);

  return <div className={s.DivStyles}>React template</div>;
};
