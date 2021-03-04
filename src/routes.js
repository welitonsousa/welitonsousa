import React from 'react';
import { Home } from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

const Routes = () => {
  return (
		<div>
			<Navbar bg="light" expand="lg">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/posts">Posts</Nav.Link>
				</Nav>
			</Navbar>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true} component={Home} />
				</Switch>
			</ BrowserRouter>
		</div>
	)
};

export {Routes};