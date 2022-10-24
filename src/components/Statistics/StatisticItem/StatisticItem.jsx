import PropTypes from 'prop-types';

import css from './StatisticItem.module.css';

export const StatisticItem = ({ label, percentage, color }) => {
  return (
    <li className={css.statisticItem} style={{ backgroundColor: color }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};
