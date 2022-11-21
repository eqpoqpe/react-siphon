import { Siphon } from "siphon";

function App() {
  useEffect(() => {
    Siphon("", {
      method: "",
      params: {},
      success: () => {},
      fail: () => {},
      invalid: () => {}
    });
  }, []);
  
  return (
    <div></div>
  );
}
