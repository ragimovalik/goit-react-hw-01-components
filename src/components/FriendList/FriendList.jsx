import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  //   const friend = friends.map(({ id, avatar, name, isOnline }) => {});

  return (
    <>
      <h3>Task - 3</h3>

      {
        <ul className={styles.Friend__list}>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <>
                <FriendListItem
                  id={id}
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                />
              </>
            );
          })}
        </ul>
      }
    </>
  );
}

export default FriendList;
