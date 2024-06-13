import { useState, useEffect } from "react";

export const useGetUserName = () => {
  const [userName, setUserName] = useState<string|null>(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setUserName(username);
  }, []);

  return userName;
};
