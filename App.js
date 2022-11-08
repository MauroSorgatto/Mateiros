import * as React from 'react';
import { AccountRouter } from './src/Router/Account'
import { AppRouter } from './src/Router/App'

export default function App() {
  const [userToken, setUserToken] = React.useState(false);

  return userToken ? <AppRouter /> : <AccountRouter />;
}