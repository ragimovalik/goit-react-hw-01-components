import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Nav from './components/Nav';
import Container from './components/Container/Container';

// import Title from './components/Title/Title';
// import MainTitle from './components/Title/MainTitle';

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Switch>
          {routes.map(({ path, exact, component: Component, label }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              component={Component}
              label={label}
            />
          ))}
        </Switch>
      </Container>
    </>
  );
}

export default App;

/*
// Non-router markup sample

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
*/
