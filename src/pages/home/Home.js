import React, {useEffect, useState} from 'react';
import { Row, Image, Col } from "react-bootstrap";
import { Api } from "../../services/connection";
import profile from '../../assets/images/weliton-profile.jpg'

import './home.css';

const Home = () => {
	//const [data, setData] = useState({});

	const getData = async () =>{
		const res = await Api.get('/profile');
		console.log(res.data);
	}

	useEffect(() => {
    
    getData();
  }, []);

	return (
		<div>
			<Row>
				<Col xs={6} md={4} className="content-image-profile">
					<div>
						<Image src={profile} roundedCircle className="profile-image"/>
						<div className="left">
							<p>
								asdasd
								asdasd
								asd
							</p>
						</div>
					</div>
				</Col>
				<Col xs={6} md={1}>
					<div className="line"/>
				</Col>
				<Col xs={6} md={1}>
					
				</Col>
			</Row>
		</div>
	)
}



export {Home};