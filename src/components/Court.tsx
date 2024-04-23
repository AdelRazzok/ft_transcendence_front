import IStage from '@/interfaces/IStage'
import styles from '@/ui/game.module.css'
import { Layer, Stage } from 'react-konva'

export default function Court({ children, width, height }: IStage) {
	return (
		<Stage width={width} height={height} className={`${styles.game_container}`}>
			<Layer>{children}</Layer>
		</Stage>
	)
}
