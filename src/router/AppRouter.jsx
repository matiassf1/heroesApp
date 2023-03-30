import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <div  style={{backgroundColor:'#F2EFBD'}}>
      <Routes>
        
        {/* ONE WAY */}
        <Route path='login/' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage />}/>
            </Routes>
          </PublicRoute>
          }
        />

        {/* <Route path='login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } /> */}


        {/* OTHER WAY */}
         <Route
          path='/*'
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        /> 
      </Routes>
    </div>
  );
};
