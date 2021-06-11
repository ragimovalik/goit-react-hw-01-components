import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
// import { routes } from '../../routes';

const useStyles = createUseStyles({
  Flex: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Header: {
    padding: 10,
    marginBottom: 10,
    borderBottom: '5px solid purple',
  },
  Nav__wrap: {
    minWidth: 360,
    maxWidth: 800,
    margin: '0 auto',
  },
  // Navigation: {
  //   backgroundColor: 'lightgray',
  // },

  Navigation__item: {
    '&:not(:last-child)': {
      marginRight: 10,
    },
  },
});

const Nav = () => {
  const classes = useStyles();

  return (
    <header className={classes.Header}>
      <nav className={[classes.Flex, classes.Nav__wrap].join(' ')}>
        <NavLink to="/"> HOME </NavLink>

        <ul className={[classes.Flex, classes.Navigation].join(' ')}>
          <li className={classes.Navigation__item}>
            <NavLink to="/profile"> Profile </NavLink>
          </li>
          <li className={classes.Navigation__item}>
            <NavLink to="/friend-list"> Friends </NavLink>
          </li>
          <li className={classes.Navigation__item}>
            <NavLink to="/statistics"> Statistics </NavLink>
          </li>
          <li className={classes.Navigation__item}>
            <NavLink to="/transaction-history"> Transactions </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
