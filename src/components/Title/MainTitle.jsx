import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Pagetitle: {
    color: 'purple',
    marginBottom: 12,
    fontSize: '1.6rem',
  },
});

const MainTitle = ({ text }) => {
  const classes = useStyles();

  return (
    <h1 className={classes.Pagetitle}>{text ? text : 'GoIt React Homework'}</h1>
  );
};

MainTitle.propTypes = {
  text: PropTypes.string,
};

export default MainTitle;
