import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
)

export default App
