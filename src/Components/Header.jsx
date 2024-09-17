import Logo from './Logo';
import Counter from './Counter';
import { useItemsContext } from '../lib/hooks';

const Header = () => {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsChecked={items.filter((item) => item.packed).length}
        totalNumbersOfItems={items.length}
      />
    </header>
  );
};

export default Header;
