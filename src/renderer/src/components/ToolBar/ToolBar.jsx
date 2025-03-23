import './toolBar.scss'
import { func } from 'prop-types'

ToolBar.propTypes = {
  setTool: func
}
export function ToolBar({ setTool }) {
  return (
    <div className="toolbar-container">
      <button className="text tool" data-tooltip="文本">
        <i className="iconfont icon-huabigongju-wenben"></i>
      </button>
      <button onClick={() => setTool('brush')} className="brush tool" data-tooltip="画笔">
        <i className="iconfont icon-huabigongju-tuya"></i>
      </button>
      <button onClick={() => setTool('eraser')} className="eraser tool" data-tooltip="橡皮擦">
        <i className="iconfont icon-xiangpi"></i>
      </button>
      <button className="circle tool" data-tooltip="圆">
        <i className="iconfont icon-huabigongju-tuoyuan"></i>
      </button>
      <button className="rectangle tool" data-tooltip="矩形">
        <i className="iconfont icon-huabigongju-juxing"></i>
      </button>
    </div>
  )
}
