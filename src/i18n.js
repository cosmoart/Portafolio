import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n.use(LanguageDetector).use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					navBar: {
						about: 'About',
						skills: 'Skills',
						projects: 'Projects',
						contact: 'Contact'
					},
					home: {
						title: 'Hi i am Cosmo',
						subtitle: 'Web Developer',
						button: 'Contact me'
					},
					about: {
						title: 'About me',
						subtitle: 'I am a web developer with experience in the development of web applications and web pages, I have knowledge in the development of web applications with React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, among others.',
					},
					skills: {
						title: 'Skills'
					},
					projects: {
						title: 'Projects'
					},
					contact: {
						title: 'Contact me',
						subtitle: 'If you want to contact me, you can do it through the following social networks or by filling out the form below.',
					}
				}
			},
			es: {
				translation: {
					navBar: {
						about: 'Sobre',
						skills: 'Habilidades',
						projects: 'Proyectos',
						contact: 'Contacto'
					},
					home: {
						title: 'Hola soy Cosmo',
						subtitle: 'Desarrollador Web',
						button: 'Contactame'
					},
					about: {
						title: 'Sobre mi',
						subtitle: 'Soy un desarrollador web con experiencia en el desarrollo de aplicaciones y páginas web, tengo conocimientos en el desarrollo de aplicaciones web con React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, entre otros.',
					},
					skills: {
						title: 'Habilidades'
					},
					projects: {
						title: 'Proyectos'
					},
					contact: {
						title: 'Contactame',
						subtitle: 'Si quieres contactarme, puedes hacerlo a través de las siguientes redes sociales o llenando el siguiente formulario.',
					}
				}
			}
		}
	});
