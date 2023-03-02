import { makeTransaction } from "./transactions/transactions";

(() => {
  const now = new Date();
  const nowIso = now.toISOString();
  const transactions = Array.from({ length: 10 }).map(() => makeTransaction());
  const filename = `transactions_report_${nowIso}`;

  console.log(filename, transactions);
})();
