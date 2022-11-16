const LOGIN = createSiphon({
  success: () => {},
  serverFail: () => {},
  deviceFail: () => {}
});

function Trap() {
  const submitHandle = () => {
    LOGIN.get()
  };
}
