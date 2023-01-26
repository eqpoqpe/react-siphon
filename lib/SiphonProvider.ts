import * as React from "react";
import { type PropsWithChildren } from "react";

import { SiphonClient } from "./SiphonResolve";
import defaultSiphonContext from "./SiphonContext";

type SiphonProviderProps = {

  // default secrets config
  client?: SiphonClient<any>;
} & PropsWithChildren;

function SiphonProvider(props: SiphonProviderProps) {
  const { client, children } = props;

  if (!!client && client instanceof SiphonClient) {
    return React.createElement(
      defaultSiphonContext.Provider,
      { value: client },
      children
    );
  } else {
    return React.createElement(
      defaultSiphonContext.Provider,
      { value: null },
      children
    );
  }
}

export { SiphonProvider };