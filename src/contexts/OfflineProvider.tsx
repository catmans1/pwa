import React, { createContext, useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Helmet } from 'react-helmet-async'

const OfflineContext = createContext({
  isOffline: false,
});

type OfflineProviderProps = {
  children: React.ReactElement;
};

const OfflineProvider: React.FC<OfflineProviderProps> = ({ children }) => {
  const [offline, setOffline] = useState<boolean>(false)
  const alert = useAlert()

  useEffect(() => {
    if (offline) {
      alert.info(`You're not online`)
    }
  }, [offline]) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    function onHandleOnline() {
      setOffline(false)
    }

    function onHandleOffline() {
      setOffline(true)
    }
    window.addEventListener('online', onHandleOnline);
    window.addEventListener('offline', onHandleOffline);

    return () => {
      window.removeEventListener('online', onHandleOnline);
      window.removeEventListener('offline', onHandleOffline);
    };
  }, [])

  return (
    <OfflineContext.Provider value={{ isOffline: offline }}>
      {
        offline &&
        <Helmet>
          <meta name="theme-color" content="#000000" />
        </Helmet>
      }
      {children}
    </OfflineContext.Provider>
  );
}

export { OfflineProvider, OfflineContext }