import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Title from './components/Title/Title';
import MainTitle from './components/Title/MainTitle';
import { name, location, tag, avatar, stats } from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <Container>
      <MainTitle text={'React Homework #1'} />

      <Title text={'Task #1 (Profile)'} />

      <Profile
        name={name}
        location={location}
        tag={tag}
        avatar={avatar}
        followers={stats.followers}
        likes={stats.likes}
        views={stats.views}
      />
      <Title text={'Task #2 (Statistics)'} />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />

      <Title text={'Task #3 (Friend List)'} />

      <FriendList friends={friends} />

      <Title text={'Task #4 (Transactions)'} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
