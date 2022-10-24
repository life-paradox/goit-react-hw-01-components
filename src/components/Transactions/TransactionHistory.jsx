import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
