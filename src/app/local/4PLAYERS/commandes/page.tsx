"use client";

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import homeStyles from '@/ui/home.module.css';
import menuStyles from '@/ui/menu.module.css';
import Link from 'next/link';
import i18n from '../../../../../i18n';

export default function MainMenu() {
    const { t } = useTranslation();
    const [lang, setLang] = useState('en');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Définir que le composant est monté
    }, []);

    useEffect(() => {
        if (isClient) {
            const params = new URLSearchParams(window.location.search);
            const newLang = params.get('lang') || 'en';
            setLang(newLang);
            i18n.changeLanguage(newLang);
        }
    }, [isClient]);

    return (
        <>
            <div className={`${homeStyles.gif_background}`}></div>
            <Link href={`/local/4PLAYERS?lang=${lang}`}  className={`${menuStyles.menu_title} pt-5 text-center`}>{t('START')}</Link>


			<div className="mt-5 gap-5 pt-5 container d-flex flex-column justify-content-center align-items-center">
                <h5 className={`${menuStyles.menu_link}`}>{t('PLAYER1_4')}</h5>
                <h5 className={`${menuStyles.menu_link}`}>{t('PLAYER2_4')}</h5>
                <h5 className={`${menuStyles.menu_link}`}>{t('PLAYER3_4')}</h5>
                <h5 className={`${menuStyles.menu_link}`}>{t('PLAYER4_4')}</h5>
            </div>
		</>
	)
}
//link credits a modif pour le multi redirige vers credits pour le moment
