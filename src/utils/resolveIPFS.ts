export const resolveIPFS = (url?: string) => {
  return url?.replace('https://ipfs.moralis.io:2053', 'https://ipfs.io/');
};
