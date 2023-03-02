import {
  S3Client,
  ListBucketsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-1" });

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
  await client.send(cmd);
}

export async function getBucketName() {
  const { Buckets } = await listBuckets();
  return (
    Buckets?.find(({ Name }) => Name?.startsWith("test-files"))?.Name ?? ""
  );
}

function listBuckets() {
  return client.send(new ListBucketsCommand({}));
}
