function Trap() {
  const LOGIN = useSiphon({
    success: () => {},
    serverFail: () => {},
    deviceFail: () => {}
  });
  const submitHandle = () => {
    LOGIN.get()
  };
}
