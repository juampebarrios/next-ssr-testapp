import './Navbar.scss';
import Container from '../generic-components/container/Container';
import Logo from './logo/Logo';
import Search from './search/Search';
import UserMenu from './user-menu/UserMenu';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Container>
        <div className='nav-elements'>
          <Logo/>
          <Search/>
          <UserMenu/>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;