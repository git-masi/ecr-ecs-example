import {
  S3Client,
  ListBucketsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getCredentials } from "../credentials/credentials";

const client = (async () => {
  if (process.env["NODE_ENV"] === "production") {
    return new S3Client({
      region: "us-east-1",
    });
  }

  return new S3Client({
    region: "us-east-1",
    credentials: await getCredentials()(),
  });
})();

// const client = new S3Client({
//   region: "us-east-1",
// });

export async function upload(
  bucketName: string,
  key: string,
  body: string | Buffer
) {
  const cmd = new PutObjectCommand({
    Key: key,
    Bucket: bucketName,
    Body: body,
  });
  await (await client).send(cmd);
}

export async function getBucketName() {
  const { Buckets } = await listBuckets();
  return (
    Buckets?.find(({ Name }) => Name?.startsWith("test-files"))?.Name ?? ""
  );
}

async function listBuckets() {
  return (await client).send(new ListBucketsCommand({}));
}
