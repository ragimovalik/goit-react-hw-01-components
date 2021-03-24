import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ text }) => {
  return text ? <h3 className={styles.Title}>{text}</h3> : null;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;

/*
      <h3 className={styles['title']}>Task - 1</h3>


*/
