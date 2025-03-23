import { Stage, Layer, Rect, Circle, Text, Line } from 'react-konva'
import './canvas.scss'
import { useRef, useState } from 'react'
import { func, string } from 'prop-types'

Canvas.propTypes = {
  tool: string,
  setTool: func.isRequired
}
export default function Canvas({ tool, setTool }) {
  const [lines, setLines] = useState([])
  const isDrawing = useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }
  const handleMouseMove = (e) => {
    // 如果没有画,就跳过
    if (!isDrawing.current) {
      return
    }

    const stage = e.target.getStage()
    const point = stage.getPointerPosition()

    // 画线
    let lastLine = lines[lines.length - 1]
    // 增加一个点
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // 替换最后一个
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }
  const handleMouseUp = () => {
    isDrawing.current = false
  }
  return (
    <div className="canvas-container">
      <Stage
        width={1200}
        height={700}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === 'brush' ? 'source-over' : 'destination-out'}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}
