import { fromIni } from "@aws-sdk/credential-providers";
import { exec } from "child_process";

(async () => {
  const { accessKeyId, secretAccessKey } = await fromIni({
    profile: process.env["AWS_PROFILE"],
  })();
  process.env["AWS_ACCESS_KEY_ID"] = accessKeyId;
  process.env["AWS_SECRET_ACCESS_KEY"] = secretAccessKey;

  // For testing purposes
  // exec(
  //   "echo $AWS_ACCESS_KEY_ID $AWS_SECRET_ACCESS_KEY",
  //   (err, stdout, stderr) => {
  //     console.log("err", err);
  //     console.log("stdout", stdout);
  //     console.log("stderr", stderr);
  //   }
  // );

  exec("docker compose up", (err, stdout, stderr) => {
    console.log("err", err);
    console.log("stdout", stdout);
    console.log("stderr", stderr);
  });
})();
