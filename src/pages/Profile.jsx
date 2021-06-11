import ProfileComponent from '../components/Profile/Profile';
import { name, location, tag, avatar, stats } from '../data/user.json';

const Profile = () => (
  <ProfileComponent
    name={name}
    location={location}
    tag={tag}
    avatar={avatar}
    followers={stats.followers}
    likes={stats.likes}
    views={stats.views}
  />
);

export default Profile;
