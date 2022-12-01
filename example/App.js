import { SiphonClient, SiphonProvider, useSiphon } from "react-siphon";

const siphon = new SiphonClient();

siphon.createSecret([
  {
    key: "GET_PROFILE",
    url: ""
  }
]);

function Trap() {
  const { url } = useSiphon({ key: "GET_RPOFILE" });
}

export default function App() {
  return (
    <SiphonProvider client={siphon}>
      <Trap />
    </SiphonProvider>
  );
};
