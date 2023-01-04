import DefaultSiphonContext from "./SiphonContext";
import { SiphonOption } from "./SiphonResolve";
import { useContext } from "react";

function useSiphon<T>(options: SiphonOption): T | null {
  const { secretKey } = options;
  const ctx = useContext(DefaultSiphonContext);

  return (ctx?.container.get(secretKey)?.$body as T) || null;
}

export { useSiphon };