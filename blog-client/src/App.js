import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { Context as BlogContext } from './context/BlogContext';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  // const { state, tryLocalSignin } = useContext(AuthContext);
  const { state } = useContext(BlogContext);
  console.log(state);

  // useEffect(() => {
  //   tryLocalSignin();
  // }, []);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      {'sds' ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};
export default App;
