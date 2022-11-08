import NavLink from './NavLink';
import createKey from '../../Utils/createHref';

const NavItems = ({
  links,
  ctaButtonLabel,
  isMobileNavMenuOpen,
  onClick,
}) => {
  const navLinks = links.map(link => (
    <NavLink linkName={link} key={createKey(link)} />
  ));

  const classes = isMobileNavMenuOpen
    ? 'main-nav open-menu'
    : 'main-nav';

  return (
    <nav className={classes} onClick={onClick}>
      <ul className='main-nav-list'>
        {navLinks}
        <NavLink
          linkName={ctaButtonLabel}
          isButton={true}
        />
      </ul>
    </nav>
  );
};

export default NavItems;
