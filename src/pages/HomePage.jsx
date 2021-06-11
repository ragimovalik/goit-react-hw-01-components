import MainTitle from '../components/Title/MainTitle';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
// import Title from '../components/Title/Title';

const useStyles = createUseStyles({
  Title: {
    marginBottom: 6,
  },
  Task: {
    '&:hover': {
      transform: 'scale(1.1)',
    },

    '&:not(:last-child)': {
      marginBottom: 6,
    },
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <MainTitle text={'React Homework #1'} />

      <h3 className={classes.Title}>Tasks of homework: </h3>
      <ul className={classes.Tasks}>
        <li className={classes.Task}>
          <span>Task 1: </span>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={classes.Task}>
          <span>Task 2: </span>
          <Link to="/friend-list"> Friends List</Link>
        </li>
        <li className={classes.Task}>
          <span>Task 3: </span>

          <Link to="/statistics">Statistics </Link>
        </li>
        <li className={classes.Task}>
          <span>Task 4: </span>

          <Link to="/transaction-history">Transactions History</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
