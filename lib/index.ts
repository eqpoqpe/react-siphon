/**
 * index.ts - react-siphon/lib
 * 
 * Copyright (c) 2022 Ryan Martin
 */

// type SecretItem = { secretKey: string } & { [key: string]: any };
type SecretItem = {
  secretKey: string;
  body?: any;
};

type SiphonConfig = { secrets: Array<SecretItem> };

class SiphonClient {
  container = new Map<string, { $body: any, $key: string }>;

  constructor(config?: SiphonConfig) {
    if (config) {
      config.secrets.map((item) => {
        const {
          secretKey,

          // default value
          body = ""
        } = item;

        if (secretKey !== "") {
          this.container.set(secretKey, {
            $body: body,
            $key: secretKey
          });
        }
      });
    }
  }
}

export {
  type SiphonClient
};