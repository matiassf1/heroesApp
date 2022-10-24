import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Alert } from '../../ui';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const { email, password, onInputChange, formState, onResetForm } = useForm({
    email: '',
    password: '',
  });

  const { email_user, password_user } = {
    email_user: 'random@gmail.com',
    password_user: 'ventana123',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formState?.email !== email_user ||
      formState?.password !== password_user
    ){
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      onResetForm();
      return
    }
    login( 'Matias Sfer' );
    navigate('/', {
      replace: true
    });
  };

  return (
    <div className='container-sm pt-4'>
      <h1 className='text-center my-4 text-xl'>
        Login
      </h1>
       
      <div className='w-50 mx-auto'><Alert alert={'Error'} show={error}> User or password incorrect </Alert></div>

      <form className='px-5 w-50 mx-auto' onSubmit={handleSubmit} >
        <div className='form-floating mb-3'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder='name@example.com'
          />
          <label for='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='password'
            value={password}
            onChange={onInputChange}
            placeholder='Password'
          />
          <label for='floatingPassword'>Password</label>
        </div>
        <input type="submit" value='Sign In' className='btn btn-outline-primary mt-4 btn-lg' />
      </form>
    </div>
  );
};
