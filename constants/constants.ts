export enum SourceTypes {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export const DataTransactionAPIs = {
  [SourceTypes.small]: 'transactionsSmall',
  [SourceTypes.medium]: 'transactionsMedium',
  [SourceTypes.large]: 'transactionsLarge',
};
