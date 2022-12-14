function Trap() {
  const { secrets } = useSiphon({ siphonKey: "TRAP_SECRETS" });
  
  return (
    <div className="trap">
      {secrets.displayName}
    </div>
  );
}
