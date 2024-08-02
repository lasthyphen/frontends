import { HStack, Flex, Box } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import useIsMobile from 'lib/hooks/useIsMobile';
import ChainIndicators from 'ui/home/indicators/ChainIndicators';
import LatestBlocks from 'ui/home/LatestBlocks';
import LatestZkEvmL2Batches from 'ui/home/LatestZkEvmL2Batches';
import Stats from 'ui/home/Stats';
import Transactions from 'ui/home/Transactions';
import AdBanner from 'ui/shared/ad/AdBanner';
import Burger from 'ui/snippets/header/Burger';
import NetworkLogo from 'ui/snippets/networkMenu/NetworkLogo';
import ProfileMenuDesktop from 'ui/snippets/profileMenu/ProfileMenuDesktop';
import SearchBar from 'ui/snippets/searchBar/SearchBar';
import WalletMenuDesktop from 'ui/snippets/walletMenu/WalletMenuDesktop';

type Props = {
  renderSearchBar?: () => React.ReactNode;
  isMarketplaceAppPage?: boolean;
}

const rollupFeature = config.features.rollup;

const Home = ({ renderSearchBar, isMarketplaceAppPage }: Props) => {
  const isMobile = useIsMobile();
  const searchBar = renderSearchBar ? renderSearchBar() : <SearchBar/>;

  return (
    <Box as="main">
      <HStack
        as="header"
        display={{ base: 'none', lg: 'flex' }}
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={ 12 }
      >
        { isMarketplaceAppPage && (
          <Box display="flex" alignItems="center" gap={ 3 }>
            <Burger isMarketplaceAppPage/>
            <NetworkLogo isCollapsed/>
          </Box>
        ) }
        <Box width="100%">
          { searchBar }
        </Box>
        { config.UI.navigation.layout === 'vertical' && (
          <Box display="flex">
            { config.features.account.isEnabled && <ProfileMenuDesktop/> }
            { config.features.blockchainInteraction.isEnabled && <WalletMenuDesktop/> }
          </Box>
        ) }
      </HStack>
      <Flex flexDir={{ base: 'column', lg: 'row' }} columnGap={ 2 } rowGap={ 1 } mt={ 3 } _empty={{ mt: 0 }}>
        <Stats/>
        <ChainIndicators/>
      </Flex>
      { isMobile && <AdBanner mt={ 6 } mx="auto" display="flex" justifyContent="center"/> }
      <Flex mt={ 8 } direction={{ base: 'column', lg: 'row' }} columnGap={ 12 } rowGap={ 6 }>
        { rollupFeature.isEnabled && rollupFeature.type === 'zkEvm' ? <LatestZkEvmL2Batches/> : <LatestBlocks/> }
        <Box flexGrow={ 1 }>
          <Transactions/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
