import IStage from '@/interfaces/IStage'
import { Layer, Stage } from 'react-konva'

export default function Court({ children, width, height }: IStage) {
	return (
		<Stage width={width} height={height}>
			<Layer>{children}</Layer>
		</Stage>
	)
}
