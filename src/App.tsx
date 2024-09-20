import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import router from './router/router'

function App() {
  
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App
