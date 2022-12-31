import { useContext } from "react"

import { SiphonContext } from "./SiphonProvider";
import { SiphonOption } from "./SiphonResolve";

function useSiphon<T>(options: SiphonOption): T | void {
  const { secretKey } = options;
  const ctx = useContext(SiphonContext);
  var result: T;

  if (!!ctx && !!secretKey) {
    const _res =  ctx.container.get(secretKey);

    if (!!_res) {
      return (_res.$body as T);
    }
  }
}

export { useSiphon };