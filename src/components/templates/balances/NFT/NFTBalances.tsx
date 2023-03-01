import { Box, Grid, Heading } from '@chakra-ui/react';
import { useEvmWalletNFTs } from '@moralisweb3/next';
import { NFTCard } from 'components/modules';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useNetwork } from 'wagmi';

const NFTBalances = () => {
  const { data } = useSession();
  const { chain } = useNetwork();
  const { data: nfts } = useEvmWalletNFTs({
    address: data?.user?.address,
    chain: chain?.id,
  });
  const filteraddress = '0xfd50b5209406bda672879c1a9be0d8765fa6b31e';

  useEffect(() => console.log('nfts: ', nfts), [nfts]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        NFT Balances
      </Heading>
      {nfts?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {nfts.map((nft, key) => nft.tokenAddress.lowercase === filteraddress && <NFTCard nft={nft} key={key} />)}
        </Grid>
      ) : (
        <Box>Looks Like you do not have any NFTs</Box>
      )}
    </>
  );
};

export default NFTBalances;
