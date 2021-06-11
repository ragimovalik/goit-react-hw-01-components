import TransactionHistoryComponent from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

const TransactionHistory = () => (
  <TransactionHistoryComponent items={transactions} />
);

export default TransactionHistory;
