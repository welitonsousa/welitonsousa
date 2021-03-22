import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/posts';
import { Post } from './pages/post/post';
import { NotFound } from './pages/notFound/notFound';
import { ErrorScreen } from './pages/error/error';
import { Layout } from './layout/layout';
import { ErrorContext } from './context/errorContext';
import './global-style.css';

const Routes = () => {
  const errorContext = useContext(ErrorContext);
  return (
    <Layout>
      <BrowserRouter>
        {errorContext.error ? (
          <ErrorScreen />
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" exact component={Post} />
            <Route path="/posts" exact component={Posts} />
            <Route component={NotFound} />
          </Switch>
        )}
      </BrowserRouter>
    </Layout>
  );
};
export { Routes };
