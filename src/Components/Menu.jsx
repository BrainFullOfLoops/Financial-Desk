import '../App.css'
import logo from '../assets/logo.png'
import cross from '../assets/cross.png';
import { useNavigate } from 'react-router';


export function Menu() {
    const Navigate = useNavigate()
    return (
        <>
            <div className='bcde '>
                <img src={logo} alt="Logo" className='m-i' />
                <img src={cross} alt="X" className='m-i' onClick={() => {
                    Navigate(-1)
                }} />
            </div>
            <div className='m-menu' onClick={()=>{
                Navigate('/')
            }}>Home</div>
            <div className='m-menu'>Services</div>
            <div className='m-menu'>About</div>
            <div className='m-menu'>Contact Us</div>
        </>
    )
}