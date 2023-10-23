import { createContext, useContext, useEffect, useState } from 'react'
import enTranslations from '@/assets/languages/en.json'
import esTranslations from '@/assets/languages/es.json'
const LanguageContext = createContext()

const languages = ['en', 'es']

export const LanguageProvider = ({ children }) => {
	let languageValue = localStorage.getItem('language')
		? localStorage.getItem('language')
		: navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2)

	languageValue = languages.includes(languageValue) ? languageValue : 'en'

	const [language, setLanguage] = useState(languageValue)
	const translations = language === 'en' ? enTranslations : esTranslations

	useEffect(() => {
		localStorage.setItem('language', language)
	}, [language])

	const changeLanguage = newLanguage => {
		setLanguage(languages.includes(newLanguage) ? newLanguage : 'en')
		document.documentElement.lang = newLanguage
	}

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, translations }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext)
