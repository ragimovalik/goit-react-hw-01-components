import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ name, avatar, tag, location, followers, likes, views }) {
  return (
    <>
      <h3>Task - 1</h3>

      <div className={styles['profile__wrap']}>
        <div className={styles['profile__description']}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles['profile__avatar']}
          />
          <p className={styles['profile__name']}>{name}</p>
          <p className={styles['profile__tag']}>@{tag}</p>
          <p className={styles['profile__location']}>{location}</p>
        </div>

        <ul className={(styles['profile__stats'], styles['stats'])}>
          <li className={styles['stats__item']}>
            <span className={styles['stats__label']}>Followers</span>
            <span className={styles['stats__quantity']}>{followers}</span>
          </li>
          <li className={styles['stats__item']}>
            <span className={styles['stats__label']}>Views</span>
            <span className={styles['stats__quantity']}>{views}</span>
          </li>
          <li className={styles['stats__item']}>
            <span className={styles['stats__label']}>Likes</span>
            <span className={styles['stats__quantity']}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.defaultProps = {
  location: 'Somewhere',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default Profile;
