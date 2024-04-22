import { BallContext, PaddleContext } from "@/contexts/GameContext"
import IBall from "@/interfaces/IBall"
import { useContext, useEffect, useRef, useState } from "react"
import { Rect } from "react-konva"

export default function Ball({
  windowWidth,
  windowHeight,
  isGameRunning,
  isGameStarted,
  increaseScore,
  handleGameEnd,
}: IBall) {
  const calculateInitialXPosition = (windowWidth: number) => windowWidth / 2 - ballProps.width / 2
  const calculateInitialYPosition = (windowHeight: number) => windowHeight / 3 - ballProps.height / 2

  const ballProps = useContext(BallContext)
  const paddleProps = useContext(PaddleContext)
  const [x, setX] = useState<number>(calculateInitialXPosition(windowWidth))
  const [y, setY] = useState<number>(calculateInitialYPosition(windowHeight))
  const [isStopped, setIsStopped] = useState<boolean>(false)

  return (
    <Rect
      x={x}
      y={y}
      width={ballProps.width}
      height={ballProps.height}
      fill={ballProps.color}
    />
  )
}
