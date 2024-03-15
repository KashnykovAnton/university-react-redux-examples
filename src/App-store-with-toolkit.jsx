import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { createNumberAction } from 'store-with-toolkit/number/actions';
import { createUserAction } from 'store-with-toolkit/users/actions';

export const App = () => {
  const dispatch = useDispatch();

  const { number } = useSelector(state => state.number);
  console.log('number: ', number);

  const { users } = useSelector(state => state.users);
  console.log('users: ', users);

  // --- With action functions
  useEffect(() => {
    dispatch(createNumberAction('123'));
    dispatch(createUserAction('Mary'));
  }, [dispatch]);

  return <div className={s.DivStyles}>React template</div>;
};
