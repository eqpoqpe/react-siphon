/**
 * index.ts - react-siphon
 * 
 * Copyright (c) 2022 - 2023 Ryan Martin
 */

import SiphonProvider from "./lib/SiphonProvider";

export {
  SiphonClient,
   type SecretItem
} from "./lib/";
export { useSiphon } from "./lib/SiphonHook";
export { SiphonProvider };
