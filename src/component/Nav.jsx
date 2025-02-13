import Logo from '../assets/images/Logo.png'
import arrow from '../assets/images/straight-arrow.png'

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul>
        <li style={{color: '#ffffff'}}>Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>
      <button><p>MY TICKETS</p> <img src={arrow} alt='arrow icon'/></button>

    </nav>
  )
}

export default Nav