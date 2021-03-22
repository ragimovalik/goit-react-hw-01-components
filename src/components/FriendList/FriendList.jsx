import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <>
      <h3 className={styles.title}>Task - 3</h3>

      {
        <ul className={styles.Friend__list}>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <li className={styles.Friend__item} key={id}>
                <FriendListItem
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                />
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
