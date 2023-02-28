import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';
import { NFTBalances } from 'components/templates/balances/NFT';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      {/* <Home /> */}
      <NFTBalances />
    </Default>
  );
};

export default HomePage;
