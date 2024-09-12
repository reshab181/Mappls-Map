// components/TokenProvider.js
import React, { createContext, useState, useEffect } from 'react';
import { getToken } from "../Services/getToken";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getToken();
      setToken(accessToken);
      if (accessToken) {
        localStorage.setItem('mappls_token', accessToken);  
      }
    };

    fetchToken();
  }, []);

  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  );
};
