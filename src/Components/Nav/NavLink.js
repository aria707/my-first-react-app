import createHref from '../../Utils/createHref';

const NavLink = ({
  linkName = 'Nav Item',
  isButton = false,
}) => {
  const classes = `main-nav-link ${
    isButton ? 'nav-btn' : ''
  }`;

  const href = `#${createHref(linkName)}`;

  return (
    <li>
      <a className={classes} href={href}>
        {linkName}
      </a>
    </li>
  );
};

export default NavLink;
