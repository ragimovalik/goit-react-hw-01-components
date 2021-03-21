import styles from './FriendListItem.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={styles.Friend__item} key={id}>
      <span
        className={styles.Friend__status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.Friend__avatar} src={avatar} alt="" width="48" />
      <p className={styles.Friend__name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
