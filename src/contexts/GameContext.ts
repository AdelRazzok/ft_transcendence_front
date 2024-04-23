import { createContext } from 'react'

export const PaddleContext = createContext({
	x: 10,
	width: 10,
	height: 125,
	speed: 10,
	color: '#fff',
})

export const BallContext = createContext({
	size: 15,
	speed: 10,
	color: '#fff',
})

export const BallColorContext = createContext('white')
