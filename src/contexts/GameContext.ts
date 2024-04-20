import IProperties from '@/interfaces/IProperties'
import { createContext } from 'react'

export const PaddleContext = createContext<IProperties>({
	width: 10,
	height: 75,
	speed: 10,
	color: '#fff',
})

export const BallContext = createContext<IProperties>({
	width: 10,
	height: 10,
	speed: 10,
	color: '#fff',
})
