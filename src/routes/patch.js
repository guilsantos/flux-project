const LOGIN = '/login'
const BACK_OFFICE = '/back-office'
const ACCOUNTS = `${BACK_OFFICE}/accounts`
const ACCOUNT = `${BACK_OFFICE}/accounts/:id`
const ACCOUNT_ORIGINATION = `${ACCOUNT}/origination`
const PAYMENT_ACCOUNT = `${ACCOUNT}/payment-accounts/:paymentAccountId`
const TRANSACTIONS = `${BACK_OFFICE}/transactions`
const TRANSACTION = `${BACK_OFFICE}/transactions/:id`

const DASHBOARD = `${BACK_OFFICE}/dashboard`

const PATCHES = {
  LOGIN,
  BACK_OFFICE,
  ACCOUNTS,
  ACCOUNT,
  ACCOUNT_ORIGINATION,
  PAYMENT_ACCOUNT,
  TRANSACTIONS,
  TRANSACTION,

  DASHBOARD
}

export default PATCHES
