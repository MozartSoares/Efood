import { GlobalStyle } from './GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Checkout from './Containers/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Checkout />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
