import { Stage, Layer, Rect, Circle, Text } from 'react-konva'
import './canvas.scss'
export default function Canvas() {
  return (
    <div className="canvas-container">
      <Stage width={1200} height={700}>
        <Layer>
          <Rect x={20} y={20} width={160} height={160} fill="red" shadowBlur={5} draggable={true} />
          <Circle x={200} y={200} radius={100} fill="blue" />
          <Text x={300} y={200} text="Hello World!" fill="green" />
        </Layer>
      </Stage>
    </div>
  )
}
