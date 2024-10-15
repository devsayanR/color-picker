import React, { useState } from "react"
import { SketchPicker } from "react-color"
import { MdContentCopy } from "react-icons/md";


function App() {

  const [currentColor, setCurrentColor] = useState("#212121")
  const onChangeColor = (color) => {
    setCurrentColor(color?.hex);
  }

  return (
    <div className="container">
      <main>
        <SketchPicker
          className="color-picker"
          color={currentColor}
          onChange={onChangeColor}
        />
        <div className="show-color">
          <p className="para">Current color: <i className="color-code">{currentColor}</i>
          </p>
          <button className="copy-btn" onClick={() => {
            navigator.clipboard.writeText(currentColor)
            alert("Color copied to clipboard!")
          }}>
            <MdContentCopy />
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
