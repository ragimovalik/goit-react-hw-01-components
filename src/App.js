import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistics';
import { name, location, tag, avatar, stats } from './user.json';
import statisticalData from './statistical-data.json';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['container']}>
      <h1>React Homework #1</h1>

      <h3>Task - 1</h3>

      <Profile
        name={name}
        location={location}
        tag={tag}
        avatar={avatar}
        followers={stats.followers}
        likes={stats.likes}
        views={stats.views}
      />

      <h3>Task - 2</h3>

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;

/*
<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
*/
