import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

import defaultAvatar from './deer-1.svg';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={styles.Friend__status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.Friend__avatar} src={avatar} alt="" width="48" />
      <p className={styles.Friend__name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
