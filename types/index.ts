export interface TransactionType {
  user_id: string;
  timestamp?: string;
  currency: string;
  amount: string;
}

export type ICurrencies = 'EUR' | 'USD' | 'GBP';

export interface ICurrencyTransactions {
  [index: string]: TransactionType[];
}

export interface ICurrency {
  EUR?: string;
  GBP?: string;
  USD?: string;
}

export interface ITotals {
  string: number
}

