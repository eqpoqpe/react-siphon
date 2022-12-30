// type SecretItme = { secretKey: string } & { [key: string]: any };
type SecretItme = {
  secretKey: string;
  body: any;
};

class SiphonClient {
  constructor(config?: Array<SecretItme>) {
    if (config) {
      
    }
  }
}

export { SiphonClient };