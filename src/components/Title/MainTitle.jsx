import PropTypes from 'prop-types';

const MainTitle = ({ text }) => {
  return <h1>{text ? text : 'GoIt React Homework'}</h1>;
};

MainTitle.propTypes = {
  text: PropTypes.string,
};

export default MainTitle;
