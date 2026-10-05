import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Quality } from './pages/Quality'
import { Standards } from './pages/Standards'
import { Quiz } from './pages/Quiz'

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="quality" element={<Quality />} />
          <Route path="standards" element={<Standards />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
)

export default App
