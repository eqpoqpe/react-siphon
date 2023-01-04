import { createContext } from "react";
import { SiphonClient } from "./SiphonResolve";

const DefaultSiphonContext = createContext<SiphonClient<any> | null>(null);

export default DefaultSiphonContext;