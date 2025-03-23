import { Stage, Layer, Rect, Circle, Text } from 'react-konva'
import './canvas.css'
export default function Canvas() {
  return (
    <div className="canvas-container">
      <Stage width={1200} height={800}>
        <Layer>
          <Rect x={20} y={20} width={160} height={160} fill="red" shadowBlur={5} draggable={true} />
          <Circle x={200} y={200} radius={100} fill="blue" />
        </Layer>
      </Stage>
    </div>
  )
}
