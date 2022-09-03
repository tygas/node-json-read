import { TransactionType } from "types";
import dayjs from "dayjs";

import { groupBy, map, orderBy } from "lodash";
import { summarizeAmountByCurrency } from "./summarizeByCurrency";


export const transformData = (transactions: TransactionType[]) => {
  // 1. Group all users by 'user_id'
  const groupedBy = groupBy(transactions, 'user_id');

  return map(groupedBy, transaction => {
    const userUUID = transaction[0].user_id;

    // 2. Find the latest transaction for a specific user
    const latestTransactionSort = orderBy(transaction, ['timestamp'], ['desc']);
    const latestTransaction = latestTransactionSort[0].timestamp;

    // 3. Group all user transactions by 'currency'
    const groupByCurrency = groupBy(transaction, 'currency');



    return {
      uuid: userUUID,
      lastActivity: dayjs(latestTransaction).format('YYYY-MM-DD'),
      // 4. Summarize all 'amount' of a specific 'currency'
      ...summarizeAmountByCurrency(groupByCurrency),
    };
  });
};
