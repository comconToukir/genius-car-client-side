import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2 className='text-3xl'>Loading...</h2>
  }
  if (user) {
    return children;
  }

  return <Navigate state={{from: location}} replace />
};

export default PrivateRoute;