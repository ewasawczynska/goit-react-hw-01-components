import css from './Statistics.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => (
  <section className={clsx(css.statistics)}>
    {title && <h2 className={css.title}>{title}</h2>}
  </section>
);
