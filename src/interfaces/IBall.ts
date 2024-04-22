export default interface IBall {
  windowWidth: number
  windowHeight: number
  isGameRunning: boolean
  isGameStarted: boolean
  increaseScore: (playerId: number) => void
  handleGameEnd: () => void
}
