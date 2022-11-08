const NavLogo = ({ logoName }) => {
  const clickHandler = e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href='#home'
      className='main-logo'
      onClick={clickHandler}>
      {logoName}
    </a>
  );
};

export default NavLogo;
