import {
  createContext,
  createElement,
  type PropsWithChildren
} from "react";

import { SiphonClient } from ".";

type SiphonProviderProps = {

  // default secrets config
  client?: SiphonClient;
} & PropsWithChildren;

const SiphonContext = createContext<SiphonClient | null>(null);

function SiphonProvider(props: SiphonProviderProps) {
  const { client, children } = props;

  if (!!client && client instanceof SiphonClient) {
    return createElement(
      SiphonContext.Provider,
      { value: client },
      children
    );
  } else {
    return createElement(
      SiphonContext.Provider,
      { value: null },
      children
    );
  }
}

export { SiphonContext };
export default SiphonProvider;