import React from 'react';
import { AuthContext } from 'contexts';

const useAuth = () => React.useContext(AuthContext);

export default useAuth;