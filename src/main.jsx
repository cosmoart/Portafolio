import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from '@/context/language'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'

import '@/styles/index.css'
import '@/styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
			<Analytics />
		</LanguageProvider>
	</React.StrictMode>
)
