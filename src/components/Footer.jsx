import logo from '../assets/LOGO.svg'

function Footer() {
    return (
        <div className="Footer">
            <img src={logo} alt="logo" className='logo_footer' />
            <div>© 2022 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer