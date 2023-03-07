import { makeTransaction } from "./transactions/transactions";
import { getBucketName, upload } from "./upload/s3";
import papa from "papaparse";

(async () => {
  try {
    const now = new Date();
    const nowIso = now.toISOString();
    const transactions = Array.from({ length: 3 }).map(() => makeTransaction());
    const basename = `transactions_report_${nowIso}`;
    const bucketName = await getBucketName();
    const body = { reportDate: nowIso, transactions };

    await upload(bucketName, `${basename}.json`, JSON.stringify(body));

    const csv = papa.unparse(transactions, { newline: "\n" });

    await upload(bucketName, `${basename}.csv`, Buffer.from(csv));

    console.log(`Finished writing files for ${basename}`);
  } catch (error) {
    console.error(error);
  }
})();
