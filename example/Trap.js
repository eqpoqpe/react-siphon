function Trap() {
  const { secrets } = useSiphon({ key: "TRAP_SECRETS" });
  
  return (
    <div className="trap">
      {secrets.displayName}
    </div>
  );
}
