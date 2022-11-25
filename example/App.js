import { Siphon } from "siphon";

export default function App() {
  const [profile, setProfile] = useSiphonQuery("GET_PROFILE");
  
  return (
    <div>{profile.displayName}</div>
  );
};
