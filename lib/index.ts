/**
 * index.ts - react-siphon/lib
 * 
 * Copyright (c) 2022 Ryan Martin
 */

// type SecretItem = { secretKey: string } & { [key: string]: any };
type SecretItem<T> = {
  secretKey: string;
  body?: T;
};

type SiphonConfig<T> = {

  // add secrets body type
  secrets: Array<SecretItem<T>>
};

class SiphonClient<T> {
  container = new Map<string, { $body: any, $key: string }>;

  constructor(config?: SiphonConfig<T>) {
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
  SiphonClient,
  type SecretItem
};