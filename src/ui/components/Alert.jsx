import React, { useEffect } from "react";
import { useAlert } from "../hooks/useAlert";

export const Alert = React.memo(({children, alert}) => {

    const { typeAlert, handleType } = useAlert(alert);
    useEffect(() => {
        handleType(alert);
    }, [])
    
  return (
    <>
      <h3 className={`alert ${typeAlert} text-center w-50 text-uppercase fs-6 text-nowrap mx-auto`} role="alert">{children}</h3> 
    </>
  )
});
