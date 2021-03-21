import styles from './FriendList.module.css';

function FriendList({ friends }) {
  const friend = friends.map(({ id, avatar, name, isOnline }) => {
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
  });

  return (
    <>
      <h3>Task - 3</h3>
      <ul className={styles.Friend__list}>{friend}</ul>
    </>
  );
}

export default FriendList;
