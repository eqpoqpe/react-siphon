import * as React from "react"

import { SiphonOption } from "./SiphonResolve";
import SiphonContext from "./SiphonContext";

function useSiphon<T>(options: SiphonOption): T | null {
  const { secretKey } = options;
  const ctx = React.useContext(SiphonContext);

  if (!!ctx && !!secretKey) {
    const _res =  ctx.container.get(secretKey);

    if (!!_res) {
      return (_res.$body as T);
    }
  }

  return null;
}

export { useSiphon };