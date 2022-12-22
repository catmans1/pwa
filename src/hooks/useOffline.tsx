import React from 'react';
import { OfflineContext } from 'contexts';

const useOffline = () => React.useContext(OfflineContext);

export default useOffline;