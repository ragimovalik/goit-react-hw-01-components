import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorSet = [
  '#ffd2d9',
  '#ffe7c9',
  '#f9ffc9',
  '#d3ffd4',
  '#d1ebff',
  '#4ea7b9',
  '#cae43a',
  '#e9d473',
  '#bbbbbb',
  '#aaaaaa',
];

function Statistics({ title, stats }) {
  const listTitle = <h4 className={styles['Stats__title']}>{title}</h4>;

  const listItem = stats.map(({ id, label, percentage }, idx, array) => (
    <li
      key={id}
      style={{
        backgroundColor: colorSet[idx],
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
