import PropTypes from 'prop-types';
import colorGet from './getColor';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  const listTitle = <h4 className={styles['Stats__title']}>{title}</h4>;

  const listItem = stats.map(({ id, label, percentage }, idx, array) => (
    <li
      key={id}
      style={{
        backgroundColor: colorGet(idx),
        flexBasis: 'calc(100% /' + array.length + ')',
      }}
      className={styles['Stats__item']}
    >
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  ));

  return (
    <>
      <section className={styles['Statistics']}>
        <>{title ? listTitle : ''} </>
        <ul className={styles['Stats__list']}>{listItem}</ul>
      </section>
    </>
  );
}

// Statistics.defaultProps = {};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
