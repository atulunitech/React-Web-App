import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateSSOToken } from '../store/authSlice';

const AuthComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleValidateToken = (token) => {
    dispatch(validateSSOToken(token));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && <p>User validated: {user.name}</p>}
      
      <button onClick={() => handleValidateToken('your-token')}>
        Validate Token
      </button>
    </div>
  );
};

export default AuthComponent;