import React from 'react'
import { createRoot } from 'react-dom'

import App from './App.jsx'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container)


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
