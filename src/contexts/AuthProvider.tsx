import { getData, removeData, storeData } from 'db/localStorage';
import { IAuth } from 'interfaces';
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  username: '',
  storeAuth: (_: IAuth) => { },
  removeAuth: () => { }
});

type AuthProviderProps = {
  children: React.ReactElement;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    function getExistAuth() {
      const data = getData('kAuth')
      if (data) {
        const auth: IAuth = JSON.parse(data)
        setUsername(auth.username)
      }
    }

    getExistAuth()
  }, [])

  function storeAuth(value: IAuth) {
    setUsername(value.username)
    storeData('kAuth', JSON.stringify(value))
  }

  function removeAuth() {
    setUsername('')
    removeData('kAuth')
  }

  return (
    <AuthContext.Provider value={{ username: username, storeAuth: storeAuth, removeAuth: removeAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext }