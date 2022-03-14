// eslint-disable-next-line import/no-mutable-exports
import type { NetworkString } from 'ldk';

// eslint-disable-next-line import/no-mutable-exports
let network: {
  chain: NetworkString;
  explorerLiquidAPI: string;
  explorerBitcoinAPI: string;
  explorerLiquidUI: string;
  explorerBitcoinUI: string;
  tdexdBaseUrl: string;
};

if (process.env.NODE_ENV === 'production') {
  network = {
    chain: 'liquid',
    explorerLiquidAPI: 'https://blockstream.info/liquid/api',
    explorerBitcoinAPI: 'https://blockstream.info/api',
    explorerLiquidUI: 'https://blockstream.info/liquid',
    explorerBitcoinUI: 'https://blockstream.info',
    tdexdBaseUrl: 'https://localhost:9000',
  };
} else if (process.env.REACT_APP_CHAIN === 'testnet') {
  network = {
    chain: 'testnet',
    explorerLiquidAPI: 'https://blockstream.info/liquidtestnet/api',
    explorerBitcoinAPI: 'https://blockstream.info/testnet/api',
    explorerLiquidUI: 'https://blockstream.info/liquidtestnet',
    explorerBitcoinUI: 'https://blockstream.info/testnet',
    tdexdBaseUrl: 'https://localhost:9000',
  };
} else {
  network = {
    chain: 'regtest',
    explorerLiquidAPI: 'http://localhost:3001',
    explorerBitcoinAPI: 'http://localhost:3000',
    explorerLiquidUI: 'http://localhost:5001',
    explorerBitcoinUI: 'http://localhost:5000',
    tdexdBaseUrl: 'https://localhost:9000',
  };
}

export { network };
