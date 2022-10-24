import React, { useEffect } from 'react';
import { useAlert } from '../hooks/useAlert';

export const Alert = React.memo(({ children, alert, show }) => {
  const { typeAlert, handleType } = useAlert(alert);
  useEffect(() => {
    handleType(alert);
  }, []);

  return (
    <div
      style={{ display: show ? '' : 'none' }}
      className={`alert ${typeAlert} text-center fs-6 text-nowrap animate__animated animate__fadeIn`}
      role='alert'>
      {children}
    </div>
  );
});
