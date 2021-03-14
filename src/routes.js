import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/posts';
import { Post } from './pages/post/post';
import { NotFound } from './pages/notFound/notFound';
import { Layout } from './layout/layout';
import './global-style.css';

const Routes = () => (
  <Layout>
    <BrowserRouter className="min-size-heigth">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={Post} />
        <Route path="/posts" exact component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export { Routes };
