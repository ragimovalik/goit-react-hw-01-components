import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorSet = [
  '#ffd2d9',
  '#ffe7c9',
  '#f9ffc9',
  '#d3ffd4',
  '#d1ebff',
  '#ffd2d9',
  '#ffe7c9',
  '#f9ffc9',
  '#d3ffd4',
  '#d1ebff',
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
    <section className={styles['Statistics']}>
      <>{title ? listTitle : ''} </>
      <ul className={styles['Stats__list']}>{listItem}</ul>
    </section>
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
  ),
};

export default Statistics;

/*
Компонент должен принимать два пропа title и stats, 
в которых указывается заголовок и объект статистики.

title - не обязателен, и если он не передан, не должна 
рендериться разметка заголовка <h2>.
stats - массив объектов содержащих информацию о элементе 
статистики. Может иметь произвольное кол-во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, 
либо создать функцию для генерации случайного цвета.
Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
*/
