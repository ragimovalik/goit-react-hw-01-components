import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistics';
import FriendList from './components/FriendList/FriendList';
import { name, location, tag, avatar, stats } from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
// import styles from './App.module.css';

function App() {
  return (
    <Container>
      <h1>React Homework #1</h1>

      <Profile
        name={name}
        location={location}
        tag={tag}
        avatar={avatar}
        followers={stats.followers}
        likes={stats.likes}
        views={stats.views}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </Container>
  );
}

export default App;
