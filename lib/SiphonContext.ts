import * as React from "react";
import { SiphonClient } from ".";

const SiphonContext = React.createContext<SiphonClient<any> | null>(null);

export default SiphonContext;