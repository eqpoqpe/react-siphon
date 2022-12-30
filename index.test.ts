import SecretConfig from "./example/secrets.config";
import { SiphonClient } from ".";

test("SiphonClient", () => {
  expect(new SiphonClient(SecretConfig));
});