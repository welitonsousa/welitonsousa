import React from 'react';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/posts';
import { Post} from './pages/post/post';
import { NotFound} from './pages/notFound/notFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from "./layout/layout";
import './global-style.css';

const Routes = () => {
  return (
		<div>
			<Layout>
				<BrowserRouter className="min-size-heigth">
					<Switch >
						<Route path="/" exact={true} component={Home} />
						<Route path="/post" exact={true} component={Post} />
						<Route path="/posts" exact={true} component={Posts} />
						<Route component={NotFound} />
					</Switch>
				</ BrowserRouter>
			</Layout>
		</div>
	)
};

export {Routes};