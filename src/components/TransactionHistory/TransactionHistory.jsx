import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const tableBody = items.map(({ amount, currency, id, type }, idx) => {
    const aaa = idx % 2 === 0 ? '#ffffff' : '#d1ebff';
    return (
      <tr key={id} style={{ backgroundColor: aaa }}>
        <td>{type[0].toUpperCase() + type.substring(1)}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={styles.Transactions}>
      <thead className={styles.Transactions__head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

// TransactionHistory.defaultProps = {}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
