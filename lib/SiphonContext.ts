import { createContext } from "react";
import { SiphonClient } from "./SiphonResolve";

const defaultSiphonContext = createContext<SiphonClient<any> | null>(null);

export default defaultSiphonContext;