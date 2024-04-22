'use client'

import Ball from '@/components/Ball'
import Court from '@/components/Court'
import Paddle from '@/components/Paddle'
import { PaddleContext } from '@/contexts/GameContext'
import { useContext, useEffect, useState } from 'react'

export default function Multi() {
  // Paddle context
  const paddleContext = useContext(PaddleContext)
  // Window dimensions
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(0)
  // Game state
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false)
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
  // Paddles positions
  const [leftPaddleY, setLeftPaddleY] = useState<number>(0)
  const [rightPaddleY, setRightPaddleY] = useState<number>(0)
  // Players scores
  const [playerOneScore, setPlayerOneScore] = useState<number>(0)
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0)

  // Game functions
  const startGame = () => {
    setIsGameStarted(true)
    setIsGamePaused(false)
    setIsGameEnded(false)
    setLeftPaddleY(windowHeight / 2 - paddleContext.height / 2)
    setRightPaddleY(windowHeight / 2 - paddleContext.height / 2)
    // Ball position
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
  }

  const togglePause = () => {
    setIsGamePaused(prev => !prev)
  }

  const updateLeftPaddle = (newY: number) => {
    setLeftPaddleY(prev => newY)
  }

  const updateRightPaddle = (newY: number) => {
    setRightPaddleY(prev => newY)
  }

  const increaseScore = (playerId: number) => {
    if (playerId === 1) {
      setPlayerOneScore(prev => prev + 1)
    } else if (playerId === 2) {
      setPlayerTwoScore(prev => prev + 1)
    }
  }

  const handleGameEnd = () => {}

  console.log(leftPaddleY)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(document.documentElement.clientWidth)
      setWindowHeight(document.documentElement.clientHeight)
    }
    handleResize()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        togglePause()
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    window.focus()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!isGameStarted) {
    return (
      <div>
        <button onClick={startGame}>Start Game</button>
      </div>
    )
  }

  if (isGamePaused) {
    return (
      <div>
        <button onClick={togglePause}>Resume Game</button>
      </div>
    )
  }

  return (
    <Court width={windowWidth} height={windowHeight}>
      <Paddle
        windowHeight={windowHeight}
        windowWidth={windowWidth}
        x={paddleContext.x}
        y={leftPaddleY}
        update={updateLeftPaddle}
        isGameRunning={!isGamePaused}
        isRightPaddle={false}
        isAiOn={false}
      />

      <Paddle
        windowHeight={windowHeight}
        windowWidth={windowWidth}
        x={windowWidth - paddleContext.width - paddleContext.x}
        y={rightPaddleY}
        update={updateRightPaddle}
        isGameRunning={!isGamePaused}
        isRightPaddle={true}
        isAiOn={false}
      />

      {/* <Ball
        windowHeight={windowHeight}
        windowWidth={windowWidth}
        // add left paddle position
        // add right paddle position
        isGameStarted={isGameStarted}
        isGameRunning={!isGamePaused}
        increaseScore={increaseScore}
        handleGameEnd={handleGameEnd}
      /> */}
    </Court>
  )
}
