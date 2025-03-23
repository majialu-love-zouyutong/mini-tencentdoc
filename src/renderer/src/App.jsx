import Canvas from './components/Canvas/Canvas'
import SideBar from './components/SideBar/SideBar'
import { ToolBar } from './components/ToolBar/ToolBar'
import './assets/app.scss'
export default function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>迷你腾讯文档</h1>
        {/* 工具栏 */}
        <div className="tool-bar">
          <ToolBar />
        </div>
      </div>
      <div className="content">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </div>
    </div>
  )
}
