import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
)

export default App
