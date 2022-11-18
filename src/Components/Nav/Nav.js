import { useState } from 'react';

import './styles/Nav.scss';

import NavLogo from './NavLogo';
import NavItems from './NavItems';
import BurgerButton from './BurgerButton';

const Nav = ({
  logoName = 'Navigation',
  navLinks = ['Products', 'Testimonials', 'Contact Us'],
  ctaButtonLabel = 'Sign Up',
}) => {
  const [isMobileNavMenuOpen, setState] = useState(false);

  const burgerButtonClickHandler = () =>
    setState(prevState => !prevState);

  const navItemsClickHandler = () => {
    isMobileNavMenuOpen && setState(false);
  };

  return (
    <header className='header'>
      <NavLogo logoName={logoName} />
      <NavItems
        links={navLinks}
        ctaButtonLabel={ctaButtonLabel}
        isMobileNavMenuOpen={isMobileNavMenuOpen}
        onClick={navItemsClickHandler}
      />
      <BurgerButton
        isMobileNavMenuOpen={isMobileNavMenuOpen}
        onClick={burgerButtonClickHandler}
      />
    </header>
  );
};

export default Nav;
