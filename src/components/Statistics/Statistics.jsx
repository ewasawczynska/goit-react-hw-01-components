import css from './Statistics.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { StatisticsItem } from '../../components';

export const Statistics = ({ title, data }) => (
  <section className={clsx(css.statistics)}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statisticsList}>
      {data.map((data, index) => (
        <StatisticsItem key={data.id} data={data} />
      ))}
    </ul>
  </section>
);
