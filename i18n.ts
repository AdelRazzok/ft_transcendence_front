import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './public/locales/en/translation.json'
import fr from './public/locales/fr/translation.json'
import es from './public/locales/es/translation.json'

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			fr: { translation: fr },
			es: { translation: es },
		},
		lng: 'en',
	})

export default i18n
