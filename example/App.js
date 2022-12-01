import { SiphonClient, SiphonProvider } from "react-siphon";

const siphon = new SiphonClient();

siphon.createSecret([
  {
    key: "GET_PROFILE"
  }
]);

export default function App() {
  return (
    <SiphonProvider client={siphon}>
    </SiphonProvider>
  );
};
