import React from 'react';
import Routes from './routes/Routes';
import TopNav from './navigation/TopNav';
// import { isLoggedIn } from './utils/auth';
// import Login from './login/Login';


function App() {

  /*
  if(!isLoggedIn()) {
    return <Login />;
  }
  */

  return (
    <div>
      <TopNav />
      <Routes />
    </div>
  );
}

export default App;
