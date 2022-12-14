import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false,
  };

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
      logged: !!user,
      user: user,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const navigate = useNavigate();

  const login = async (name = '') => {
    const user = {
      id: 'ABC',
      name: 'Matias Sfer',
    };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = async () => {
    localStorage.removeItem('user');
    navigate('/login');
    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{
       ...authState,

       //Methods
        login, logout, 
     }}>
      {children}
    </AuthContext.Provider>
  );
};
