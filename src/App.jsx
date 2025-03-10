import { Toaster } from 'react-hot-toast';

import AppRoutes from './routes/routes';
import './App.css'

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  )
}

export default App
