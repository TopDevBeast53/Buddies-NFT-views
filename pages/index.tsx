import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';
import { NFTBalances } from 'components/templates/balances/NFT';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <NFTBalances />
    </Default>
  );
};

export default HomePage;
