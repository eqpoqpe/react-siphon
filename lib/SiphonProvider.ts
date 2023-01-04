import * as React from "react";
import { type PropsWithChildren } from "react";

import { SiphonClient } from "./SiphonResolve";
import SiphonContext from "./SiphonContext";

type SiphonProviderProps = {

  // default secrets config
  client?: SiphonClient<any>;
} & PropsWithChildren;

function SiphonProvider(props: SiphonProviderProps) {
  const { client, children } = props;

  if (!!client && client instanceof SiphonClient) {
    return React.createElement(
      SiphonContext.Provider,
      { value: client },
      children
    );
  } else {
    return React.createElement(
      SiphonContext.Provider,
      { value: null },
      children
    );
  }
}

export { SiphonProvider };