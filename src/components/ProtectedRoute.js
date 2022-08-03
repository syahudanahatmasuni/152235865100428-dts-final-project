import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../apis/firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/login"/>;
  }

  if(user && !loginOnly) {
    return <Navigate to="/"/>;
  }
  
  return children;
};

export default ProtectedRoute;