import { PaddleContext } from '@/contexts/GameContext'
import IPaddle from '@/interfaces/IPaddle'
import { useContext, useEffect, useRef, useState } from 'react'
import { Rect } from 'react-konva'

export default function Paddle({
	windowWidth,
	windowHeight,
	x,
	y,
	update,
	isGameRunning,
	isRightPaddle,
	isAiOn,
}: IPaddle) {
	// Paddle context
	const paddleContext = useContext(PaddleContext)
	// Direction state
	const [isMovingUp, setIsMovingUp] = useState<boolean>(false)
	const [isMovingDown, setIsMovingDown] = useState<boolean>(false)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isGameRunning) return
			const upKey = isRightPaddle ? 'ArrowUp' : 'w'
			const downKey = isRightPaddle ? 'ArrowDown' : 's'
	
			if (e.key === upKey) {
				setIsMovingUp(true)
			} else if (e.key === downKey) {
				setIsMovingDown(true)
			}
		}		
	
		const handleKeyUp = (e: KeyboardEvent) => {
			if (isRightPaddle) {
				if (e.key === 'ArrowUp' && isMovingUp) setIsMovingUp(false)
				else if (e.key === 'ArrowDown' && isMovingDown) setIsMovingDown(false)
			} else {
				if (e.key === 'w' && isMovingUp) setIsMovingUp(false)
				else if (e.key === 's' && isMovingDown) setIsMovingDown(false)
			}
		}
	
		window.addEventListener('keydown', handleKeyDown, false)
		window.addEventListener('keyup', handleKeyUp, false)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [isMovingUp, isMovingDown, isGameRunning, isRightPaddle])

	useEffect(() => {
		const loop = () => {
			if (isGameRunning) {
				if (isMovingUp && y > 0) {
					update(y - paddleContext.speed)
				} else if (isMovingDown && y < (windowHeight - paddleContext.height)) {
					update(y + paddleContext.speed)
				}
			}
			requestAnimationFrame(loop)
		}
		loop()
	}, [
		isMovingUp,
		isMovingDown,
		windowHeight,
		y,
		update,
		isGameRunning,
		paddleContext.height,
		paddleContext.speed
	])

	return (
		<Rect
			x={x}
			y={y}
			width={paddleContext.width}
			height={paddleContext.height}
			fill={paddleContext.color}
		/>
	)
}
