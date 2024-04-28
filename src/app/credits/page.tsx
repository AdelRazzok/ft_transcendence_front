'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import i18n from '@/../i18n'

export default function MainMenu() {
	const { t } = useTranslation()
	const [lang, setLang] = useState('en')
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (isClient) {
			const params = new URLSearchParams(window.location.search)
			const newLang = params.get('lang') || 'en'
			setLang(newLang)
			i18n.changeLanguage(newLang)
		}
	}, [isClient])

	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>
				{t('CREDITS')}
			</h1>
			<h2 className={`${menuStyles.menu_link} pt-5 text-center`}>{t('FDP')}</h2>

			<div className="mt-5 gap-10 container d-flex flex-column justify-content-center align-items-center">
				<div className={`${menuStyles.menu_link} mt-3`}>Adel RAZZOK</div>
				<div className={`${menuStyles.menu_link} mt-3`}>Anthony RODRIGUEZ</div>
				<div className={`${menuStyles.menu_link} mt-3`}>Clara HUGOT</div>
				<div className={`${menuStyles.menu_link} mt-3`}>Jordann LECOMTE</div>
			</div>
		</>
	)
}
