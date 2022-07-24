import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MemoryGame} from "./MemoryGame"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
)
