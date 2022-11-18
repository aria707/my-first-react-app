import icons from './BurgerIcons';

const BurgerButton = ({ isMobileNavMenuOpen, onClick }) => {
  return (
    <button className='burger-button' onClick={onClick}>
      {isMobileNavMenuOpen
        ? icons.get('x-mark')
        : icons.get('burger')}
    </button>
  );
};

export default BurgerButton;
