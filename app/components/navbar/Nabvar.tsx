import './Navbar.scss';
import Container from '../generic-components/container/Container';
import Logo from './logo/Logo';
import Search from './search/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Container>
        <div className='nav-elements'>
          <Logo/>
          <Search/>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;