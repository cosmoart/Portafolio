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
						title: "Hi i'm",
						subtitle: 'Web Developer',
						button: 'Contact me'
					},
					about: {
						title: 'About me',
						description: `I am a web programmer with experience developing web applications and websites. I specialize in using technologies like HTML, CSS, JavaScript, and PHP to create engaging and functional online experiences. I also have knowledge of JavaScript frameworks like React and Angular, and I have experience working with databases and content managers like MySQL and WordPress.
						\n\n\r
						I am passionate about the world of web development and am always looking for new ways to learn and improve my skills.I enjoy working on projects that allow me to use my creative and technical knowledge to solve problems and create innovative solutions.In my free time, I like to experiment with new technologies and tools and participate in the web development community through forums and events.`,
					},
					skills: {
						title: 'Skills'
					},
					projects: {
						title: 'Projects'
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
						title: "Hola soy",
						subtitle: 'Desarrollador Web',
						button: 'Contactame'
					},
					about: {
						title: 'Sobre mi',
						description: `
						Soy un programador web con experiencia en el desarrollo de aplicaciones web y sitios web. Me especializo en el uso de tecnologías como HTML, CSS, JavaScript, y PHP para crear experiencias en línea atractivas y funcionales. También tengo conocimientos en frameworks de JavaScript como React y Angular, y tengo experiencia trabajando con bases de datos y gestores de contenido como MySQL y WordPress.

						Me apasiona el mundo del desarrollo web y siempre estoy buscando nuevas formas de aprender y mejorar mis habilidades. Disfruto trabajar en proyectos que me permiten utilizar mis conocimientos técnicos y creativos para resolver problemas y crear soluciones innovadoras. En mis tiempos libres, me gusta experimentar con tecnologías y herramientas nuevas y participar en la comunidad de desarrollo web a través de foros y eventos.`
					},
					skills: {
						title: 'Habilidades'
					},
					projects: {
						title: 'Proyectos'
					}
				}
			}
		}
	});
