import { ICurrencyTransactions, TransactionType } from "types";
import { forEach, sumBy } from "lodash";


export const summarizeAmountByCurrency = (groupByCurrency: ICurrencyTransactions) => {
  let res: any = {};
  forEach(groupByCurrency, (currencyGroup) => {
    const currencyBalance = sumBy(
      currencyGroup,
      (currencyGroupTransaction: TransactionType) =>
        Number(currencyGroupTransaction.amount) || 0
    );
    if (currencyGroup[0].currency)
      res[currencyGroup[0].currency] = currencyBalance.toFixed(2);

  });
  return res;
};
