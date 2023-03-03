import { fromEnv, fromIni } from "@aws-sdk/credential-providers";

export function getCredentials() {
  if (process.env["AWS_PROFILE"]) {
    return fromIni({ profile: process.env["AWS_PROFILE"] });
  }

  return fromEnv();
}
