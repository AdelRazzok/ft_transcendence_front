import { createContext } from 'react'

export const PaddleContext = createContext({
	x: 10,
	width: 10,
	height: 75,
	speed: 10,
	color: '#fff',
})

export const BallContext = createContext({
	size: 10,
	speed: 10,
	color: '#fff',
})
