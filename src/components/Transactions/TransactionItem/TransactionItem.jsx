import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.transactionItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
