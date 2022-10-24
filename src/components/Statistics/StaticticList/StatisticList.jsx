import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import { getRandomHexColor } from 'js/colorRandomizer';
import css from './StatisticList.module.css';

export const StatisticList = ({ data }) => {
  return (
    <ul className={css.statisticList}>
      {data.map(item => {
        const randomColor = getRandomHexColor();
        return (
          <StatisticItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            color={randomColor}
          />
        );
      })}
    </ul>
  );
};

StatisticList.propTypes = {
  data: PropTypes.array,
};
