import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';

export const App = () => {
  // const state = useSelector(state => {
  //   return state;
  // });
  // console.log('state: ', state);

  const number = useSelector(state => state.number);
  const dispatch = useDispatch();
  console.log('number: ', number);

  useEffect(() => {
    dispatch({ payload: '123', type: 'changeStoreNumber' });
  }, [dispatch]);

  return <div className={s.DivStyles}>React template</div>;
};
