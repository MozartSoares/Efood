import { GlobalStyle } from './GlobalStyles'

import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Product />
      </div>
    </>
  )
}

export default App
