import React from 'react';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/posts';
import { Post} from './pages/post/post';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import './style.css';

const Routes = () => {
  return (
		<div>
			<Navbar bg="dark" expand="lg" className="">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/posts">Blog</Nav.Link>
					<Nav.Link href="https://github.com/welitonsousa" target="blank">GitHub</Nav.Link>
				</Nav>
			</Navbar>
			<BrowserRouter className="min-size-heigth">
				<Switch >
					<Route path="/" exact={true} component={Home} />
					<Route path="/post" exact={true} component={Post} />
					<Route path="/posts" exact={true} component={Posts} />
				</Switch>
			</ BrowserRouter>
				<footer className="footer bg-dark distance-top my-row">
					<a href="https://github.com/welitonsousa" target="blank"> <div>GitHub</div></a>
					<a href="https://gitlab.com/welitonsousa" target="blank"> <div>GitLab</div></a>
					<a href="https://www.linkedin.com/in/weliton-sousa-330a29190/" target="blank"> <div>Linkedin</div></a>
					<a href="https://wa.me/5589988187280" target="blank"> <div>Whatsapp</div></a>
					<a href="https://steamcommunity.com/id/welitonuzumaki" target="blank"> <div>Steam</div></a>
				</footer>
				<footer className = "bg-dark footer distance-bottom">
					<a href="mailto:welitonubuntu@gmail.com"><h5>Email: welitonubuntu@gmail.com</h5></a>
					<h5>Cidade: Picos - PI</h5>
				</footer>
		</div>
	)
};

export {Routes};