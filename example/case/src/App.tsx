import './App.css';
import { SiphonClient, SiphonProvider } from "react-siphon";

const siphonClient = new SiphonClient({
  secrets: [
    {
      secretKey: "",

      // when call `useSiphon` we're got this body
      body: []
    }
  ]
});

function App() {
  return (
    <SiphonProvider client={siphonClient}>
      <div className="App">
      </div>
    </SiphonProvider>
  );
}

export default App;
