import { makeTransaction } from "./transactions/transactions";
import { getBucketName, upload } from "./upload/s3";

(async () => {
  const now = new Date();
  const nowIso = now.toISOString();
  const transactions = Array.from({ length: 10 }).map(() => makeTransaction());
  const filename = `transactions_report_${nowIso}.json`;
  const bucketName = await getBucketName();
  const body = { reportDate: nowIso, transactions };

  await upload(bucketName, filename, JSON.stringify(body));

  console.log("done");
})();
