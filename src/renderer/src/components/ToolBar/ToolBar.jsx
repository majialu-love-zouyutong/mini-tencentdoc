import './toolBar.css'
export function ToolBar() {
  return (
    <div className="toolbar-container">
      <button className="text tool">点击使用文字</button>
      <button className="pencil tool">点击使用画笔</button>
      <button className="eraser tool">点击使用橡皮</button>
      <button className="circle tool">点击拖拽画圆</button>
      <button className="rectangle tool">点击拖拽画方</button>
    </div>
  )
}
