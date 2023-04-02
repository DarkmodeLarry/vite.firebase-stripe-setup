import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Payments from './Payments'
import Customers from './Customers'
import Subscriptions from './Subscriptions'
import { Checkout, CheckoutSuccess, CheckoutFail } from './Checkout'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className='navbar-nav'>
            <li>
              <Link to='/'>
                <span aria-label='emoji' role='img'>
                  🏠
                </span>{' '}
                Home
              </Link>
            </li>
            <li>
              <Link to='/checkout'>
                <span aria-label='emoji' role='img'>
                  🛒
                </span>{' '}
                Checkout
              </Link>
            </li>
            <li>
              <Link to='/payments'>
                <span aria-label='emoji' role='img'>
                  🏦
                </span>{' '}
                Payments
              </Link>
            </li>
            <li>
              <Link to='/customers'>
                <span aria-label='emoji' role='img'>
                  👥
                </span>{' '}
                Customers
              </Link>
            </li>
            <li>
              <Link to='/subscriptions'>
                <span aria-label='emoji' role='img'>
                  📦
                </span>{' '}
                Subscriptions
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/subscriptions' element={<Subscriptions />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/payments' element={<Payments />} />
            <Route path='/success' element={<CheckoutSuccess />} />
            <Route path='/failed' element={<CheckoutFail />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <h2>Strip React + Node.js</h2>
    </>
  )
}

export default App
