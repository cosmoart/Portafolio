import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n.use(LanguageDetector).use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					home: {
						title: 'Hi i am Cosmo',
						subtitle: 'Web Developer',
						button: 'Contact me'
					}
				}
			},
			es: {
				translation: {
					home: {
						title: 'Hola soy Cosmo',
						subtitle: 'Desarrollador Web',
						button: 'Contactame'
					}
				}
			}
		}
	});
