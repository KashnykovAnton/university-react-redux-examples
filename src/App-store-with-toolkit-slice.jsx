import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  deleteUser,
  updateUser,
} from './store-with-toolkit-slice/userSlice/userSlice';
import s from './App.module.css';

export const App = () => {
  const [value, setValue] = useState('');
  const [changeValue, setChangeValue] = useState('');
  const dispatch = useDispatch();

  const usersFromState = useSelector(state => state.users);

  const handleNewUserChange = e => {
    setValue(e.currentTarget.value);
  };

  const handleNewUserClick = () => {
    dispatch(createUser({ name: value, id: Math.floor(Math.random() * 100) }));
    setValue('');
  };

  const handleDelete = id => {
    dispatch(deleteUser(id));
  };

  const handleUserChange = e => {
    setChangeValue(e.currentTarget.value);
  };

  const handleChangeClick = obj => {
    dispatch(updateUser(obj));
    setChangeValue('');
  };

  return (
    <>
      <div className={s.DivStyles}>React template</div>
      <ul>
        {usersFromState.users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <button type="button" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
            <div>
              <label htmlFor="addUser">
                Change User
                <input
                  name="changeUser"
                  type="text"
                  value={changeValue}
                  onChange={handleUserChange}
                />
                <button
                  type="button"
                  onClick={() =>
                    handleChangeClick({ name: changeValue, id: user.id })
                  }
                >
                  Change user
                </button>
              </label>
            </div>
          </li>
        ))}
      </ul>
      <label htmlFor="addUser">
        Add User
        <input
          name="addUser"
          type="text"
          value={value}
          onChange={handleNewUserChange}
        />
        <button type="button" onClick={handleNewUserClick}>
          Add new user
        </button>
      </label>
    </>
  );
};
