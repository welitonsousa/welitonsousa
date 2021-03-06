import React, {useEffect, useState} from 'react';
import { Row, Image, Col, Tab, Tabs } from "react-bootstrap";
import { Api } from "../../services/connection";
import profile from '../../assets/images/weliton-profile.jpg'

import './home.css';

const Home = () => {
	const [data, setData] = useState(undefined);

	const getData = async () =>{
		try{
			const res = await Api.get('/profile');
			setData(res.data.data);
		}catch(e){}
	}
	useEffect(() => {
    getData();
  }, []);

	return (
		data ?
		<div>
			<Row>
				<Col xs={6} md={4} className="content-image-profile">
					<div>
						<Image src={profile} roundedCircle className="profile-image"/>
						<div className="left">
							
						</div>
					</div>
				</Col>
				<Col xs={6} md={7}>
					<br/>
					<h4>Sobre:</h4>
					{data.about.map((e) => <div key={`${e}`}>{e}</div>)}
					
					<br/>
					<h4>Soft skills:</h4>
					{data.softSkills.map((e) => <div key={`${e}`}>{e}</div>)}

					<br/>
					<h4>Hard skills:</h4>

					<Tabs defaultActiveKey={`${data.hardSkills[0].title}`} id="uncontrolled-tab-example">
						{data.hardSkills.map((e, index) => (
							<Tab key={`${index}`} eventKey={e.title} title={<p>{e.title}</p>}><ul>{e.itens.map((item) => <li>{item}</li>)}</ul></Tab>
						))}
					</Tabs>

				{/* 	{data.hardSkills.map((e) => (
						<div>
							<h6 key={e.title}>{e.title}: </h6>
							<div className="row">
								{e.itens.map((item) => <div key={`${item}`}>&emsp;{item.toString()}</div>)}
							</div>
						</div>
					))} */}

					<br/>
					<h4>Formação:</h4>
					{data.formation.map((e) => <div key={`${e}`}>{e}</div>)}
				</Col>
			</Row>
		</div> : <div/>
	)
}

export {Home};