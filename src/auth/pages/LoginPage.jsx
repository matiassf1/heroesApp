import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../heroes/hooks';
import { Alert } from '../../ui';

export const LoginPage = () => {
  const [alert, setAlert] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);

  const { email, password, onInputChange, formState, onResetForm } = useForm({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const correctUser = {
    email_user: 'random@gmail.com',
    password_user: 'ventana123',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { email_user, password_user } = correctUser;
    if (
      formState?.email !== email_user ||
      formState?.password !== password_user
    ){
      setError(true);
      setMessage('User or password incorrect');
      setAlert('Error');
      onResetForm();
      return
    }
    setUser(formState);
    navigate('/');
  };

  return (
    <div className='container-sm pt-4'>
      <h1 className='text-center my-4 text-xl'>
        Login
      </h1>

      {error && <Alert alert={alert}> { message } </Alert>}

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
