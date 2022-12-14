function Trap() {
  const { secrets } = useSiphon({
    siphonKey: "TRAP_SECRETS",
    siphonFilter: (secrets) => {
      const { displayName } = secrets;
      
      if (displayName) {
        return `Hear your name ${displayName}`;
      }
      
      return "";
    }
  });
  
  return (
    <div className="trap">
      {secrets.displayName}
    </div>
  );
}
