import '../App.css'
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.png'
import { useNavigate } from 'react-router'

export function Nav() {
    const Navigate = useNavigate()
    return(
        <div className='nav'>
            <img src={logo} alt="Logo" className='nav-logo' />
            <div className='nav-h1'>Financial Desk</div>
            <img src={hamburger} alt="hamburger" className='nav-ham' onClick={() =>{
                Navigate('menu')
            }} />
        </div>
    )
}