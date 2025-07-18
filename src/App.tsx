import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Banner />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
