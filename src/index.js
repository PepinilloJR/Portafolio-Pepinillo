
import { createRoot } from 'react-dom/client'
import { App } from './app.js'
import "./index.css"
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <App ></App>
  </StrictMode>
)
