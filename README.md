Command line tool that ingest a JSON file containing a list of credit/debit card transactions for a group of users, process the transactions and compute the final balances for each user.


## How to run app?
Install dependencies
 `yarn`

Run script:
`yarn dev` or 
 `ts-node app mocks/transactions-small.json`
where last parameter is path to json file

Run tests:
`yarn test`
