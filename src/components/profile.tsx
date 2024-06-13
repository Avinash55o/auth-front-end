import { useState, useEffect } from "react";
import { useGetUserName } from "../hooks/getUserName";

interface Profile {
  userName: string;
  email: string;
  avatarUrl: string;
}

const userprofile = () => {
  const [profile, setprofile] = useState<Profile | null>(null);
  const userName = useGetUserName();
  
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`http://localhost:1234/profile/${userName}`);

      if (response.status === 200) {
        const data = await response.json();
        setprofile(data || []);
      }
    };

    if (userName) {
      fetchProfile();
    }
  }, [userName]);

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <div>User Name: {profile.userName}</div>
          <div>Email: {profile.email}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default userprofile;
