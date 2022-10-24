import React, { useState } from 'react';

export const useAlert = () => {
  const [typeAlert, setTypeAlert] = useState('');

  const handleType = (type) => {
    switch (type) {
      case 'Error':
        setTypeAlert('alert-danger');
        break;
      case 'Success':
        setTypeAlert('alert-success');
        break;
      case 'Primary':
        setTypeAlert('alert-primary');
        break;
      case 'Warning':
        setTypeAlert('alert-warning');
        break;

      default:
        setTypeAlert('');
        break;
    }
  };

  return {
    typeAlert,
    handleType,
  };
};
