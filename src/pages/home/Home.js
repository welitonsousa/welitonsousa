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
			<div className="my-row">
				<Col xs={6} md={4} className="content-image-profile">
					<div>
						<Image src={profile} roundedCircle className="profile-image"/>
						<h5>Weliton de Sousa Araujo</h5>
						<div className="left">
							<h3>Projetos: </h3>
							{data.projects.map((e) =>(

								<div>
								<a key={e.title.toString()} href={e.link} target="blank">
									<h5 className="project-color">{e.title}</h5>
								</a>
								<p>{e.description}</p>
							</div>)) 
							}
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
					<br/>
					<h4>Formação:</h4>
					{data.formation.map((e) => <div key={`${e}`}>{e}</div>)}
				</Col>
			</div>
		</div> : <div className="min-size-heigth"/>
	)
}

export {Home};
