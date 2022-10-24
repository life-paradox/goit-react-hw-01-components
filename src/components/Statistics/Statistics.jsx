import PropTypes from 'prop-types';
import { StatisticList } from './StaticticList/StatisticList';
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.statisticTitle}>{title}</h2>}
      <StatisticList data={data} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
