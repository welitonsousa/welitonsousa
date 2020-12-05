import React, { Component } from 'react';
import profile from '../../assets/images/weliton-profile.jpg'
import './Home.css'
import { Text, TextMenuBody } from '../../components/Text/TextMenu'


export class Home extends Component {

	render() {
		return (
			<div className='Content'>
				<div>
					<div className='Menu'>
						<div className='Box-profile'>
							<img className='imagem-profile' alt='Weliton Sousa' src={profile} />
						</div>

						<div className='Info-weliton'>
							<Text>Weliton de Sousa Araújo, Picos-PI</Text>
							<Text>Telefone: (89) 9 8818-7280</Text>
							<Text>welitonubuntu@gmail.com</Text>
							<div className='Menu'>
								<a href='https://www.linkedin.com/in/weliton-sousa-330a29190/' target='blank'><Text>Linkedin</Text></a>
								<a href='https://github.com/Weliton-Sousa' target='blank'><Text>GitHub</Text></a>
								<a href='https://github.com/Weliton-Sousa' target='blank'><Text>GitLab</Text></a>
							</div>
						</div>
					</div>

					<body className='Body'>

						<div className='Menu-left'>
							<TextMenuBody size={22} marginTop={true}>Projetos: </TextMenuBody>

							<a href='https://mambeelavajato.uc.r.appspot.com/login' target='blank'>
								<TextMenuBody marginTop={true}>
									SimplifiCAR:
									</TextMenuBody>
							</a>
							<TextMenuBody>
								Aplicativo e site de gerenciamento de empresas que trabalham no ramo de estética veicular.
								</TextMenuBody>

							<a href='http://virgulando.surge.sh/' target='blank'>
								<TextMenuBody marginTop={true}>
									Virgulando:
								</TextMenuBody>
							</a>
							<TextMenuBody>
								Game com foco no público infantil para aprendizado sobre as normas do português.
							</TextMenuBody>

							<a href='https://test.cardlife.com.br/auth/signup'>
								<TextMenuBody marginTop={true}>
									CardLife:
								</TextMenuBody>
							</a>
							<TextMenuBody>
								Aplicativo e site de carteira digital, focada no âmbito hospitalar, para agendamentos e pagamentos de consultas.
							</TextMenuBody>
						</div>

						<div className='Menu-right'>
							<TextMenuBody size={22} marginTop={true}>Sobre: </TextMenuBody>
							<TextMenuBody>
								<ul className='Ul'>
									<li>
										Programador na Fábrica Escola de Software Mambee; <br />
									</li>
									<li>
										Capaz de utilizar as boas praticas de programação e clean code; <br />
									</li>
									<li>
										Experiência em gerência de projetos. <br />
									</li>
									<li>
										Sempre em busca de novos desafios. <br />
									</li>
								</ul>
							</TextMenuBody>

							<TextMenuBody size={22} marginTop={true}>Soft skills: </TextMenuBody>
							<TextMenuBody>
								<ul className='Ul'>
									<li>Relacionamento com o cliente;<br />
										</li>
									<li>Planejamento;<br />
										</li>
									<li>Negociação;<br />
										</li>
									<li>Comunicação;<br />
										</li>
									<li>Trabalho em equipe;<br />
										</li>
									<li>Proatividade;<br />
										</li>
									<li>Empatia;<br />
										</li>
									<li>Ética
										</li>
								</ul>
							</TextMenuBody>

							<TextMenuBody size={22} marginTop={true}>Hard skills: </TextMenuBody>
							<TextMenuBody>
								<ul className='Ul'>
									<li>Frameworks:</li>
										<ul className='Ul'>Flutter, React Native, React, VueJS, NestJs, NodeJs. </ul>
									<li>Linguagens de Programação:</li>
									<ul className='Ul'>JavaScript, Python, Dart, C.</ul>
									<li>Banco de Dados:</li>
									<ul className='Ul'>PostgreSQL, MongoDB, MySQL.</ul>
									<li>Linguagens de marcação:</li>
									<ul className='Ul'>HTML, CSS3.</ul>
									<li>Conhecimentos básicos do Linux;<br /></li>
									<li>Conhecimentos avançados no Git.</li>
								</ul>
							</TextMenuBody>

							<TextMenuBody size={22} marginTop={true}>Formações: </TextMenuBody>
							<TextMenuBody>
								<ul className='Ul'>
									<li> Ensino médio integrado ao técnico em informática (IFPI Campus Picos); <br /></li>
									<li> Graduando em Sistemas de Informações (UFPI Campus Picos);</li>
								</ul>
							</TextMenuBody>
						</div>
					</body>
				</div>
			</div>
		)
	}
}