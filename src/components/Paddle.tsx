/* eslint-disable react-hooks/exhaustive-deps */
import { PaddleContext } from '@/contexts/GameContext'
import IPaddle from '@/interfaces/IPaddle'
import { useContext, useEffect, useRef, useState } from 'react'
import { Rect } from 'react-konva'

export default function Paddle({
	x,
	y,
	windowWidth,
	windowHeight,
	update,
	isRightPaddle,
	isGameRunning,
	isAiOn,
}: IPaddle) {
	const { width, height, speed, color } = useContext(PaddleContext)
	const [isMovingUp, setIsMovingUp] = useState(false)
	const [isMovingDown, setIsMovingDown] = useState(false)
	const yRef = useRef(y)

	const calculateXPos = (windowWidth: number, isRightPaddle: boolean) =>
		isRightPaddle ? windowWidth - width - x : x

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isRightPaddle) {
				if (e.key === 'w') {
					setIsMovingUp(true)
				} else if (e.key === 's') {
					setIsMovingDown(true)
				}
			} else {
				if (e.key === 'ArrowUp') {
					setIsMovingUp(true)
				} else if (e.key === 'ArrowDown') {
					setIsMovingDown(true)
				}
			}
		}
		const handleKeyUp = (e: KeyboardEvent) => {
			if (isRightPaddle) {
				if (e.key === 'w') {
					setIsMovingUp(false)
				} else if (e.key === 's') {
					setIsMovingDown(false)
				}
			} else {
				if (e.key === 'ArrowUp') {
					setIsMovingUp(false)
				} else if (e.key === 'ArrowDown') {
					setIsMovingDown(false)
				}
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [isAiOn, isRightPaddle, windowHeight])

	useEffect(() => {
		if (isGameRunning) {
			const updatePaddle = () => {
				let newY = yRef.current
				if (isMovingUp && newY < windowHeight - height) {
					newY += speed
				} else if (isMovingDown && newY > 0) {
					newY -= speed
				}
				yRef.current = newY
				update(newY)
				requestAnimationFrame(updatePaddle)
			}
			updatePaddle()
		}
	}, [isGameRunning, isMovingUp, isMovingDown, update])

	return (
		<Rect
			x={calculateXPos(windowWidth, isRightPaddle)}
			y={yRef.current}
			width={width}
			height={height}
			fill={color}
		/>
	)
}
