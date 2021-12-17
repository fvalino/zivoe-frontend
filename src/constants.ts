import { NodeHelper } from "./helpers/NodeHelper";
import { EnvHelper } from "./helpers/Environment";
import ethereum from "./assets/tokens/wETH.svg";
import arbitrum from "./assets/arbitrum.png";
import avalanche from "./assets/tokens/AVAX.svg";

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

interface IPoolGraphURLS {
  [index: string]: string;
}

export const POOL_GRAPH_URLS: IPoolGraphURLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0xD89b31B398d29ba726582B42C9B43769274507cE", // duplicate
    OHM_ADDRESS: "0xF3929BeF18F629C899A6363d773065C36fFd13c0",
    STAKING_ADDRESS: "0x0E642Ffe758aE8ca9703fC3e2A74dC057C8163AD",
    STAKING_HELPER_ADDRESS: "0xBB74F13fE1d6e0eEd9F642394fA5D881C3B89743",
    OLD_STAKING_ADDRESS: "0x0000000000000000000000000000000000000000",
    SOHM_ADDRESS: "0xD6Ca6E9C5186A2A48B9b0E0A105703719b573264",
    WSOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    OLD_SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATE_ADDRESS: "0x0000000000000000000000000000000000000000",
    DISTRIBUTOR_ADDRESS: "0x788Daf812887BC2Bc96C4801d0E5f9263CA293e6",
    BONDINGCALC_ADDRESS: "0x4D9b0bF94097BFAA6e561bEb4FDD447b4c6D6A0c",
    CIRCULATING_SUPPLY_ADDRESS: "0x0000000000000000000000000000000000000000",
    TREASURY_ADDRESS: "0xE612B79d3eB6c152f4E511396836e336223B2186",
    REDEEM_HELPER_ADDRESS: "0xDE0906b05D5B8588dA368a72f99E0b31Ad183b09",
    PT_TOKEN_ADDRESS: "0x0000000000000000000000000000000000000000", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0x0000000000000000000000000000000000000000", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x0000000000000000000000000000000000000000", // NEW
    MIGRATOR_ADDRESS: "0x0000000000000000000000000000000000000000",
    GOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    OHM_V2: "0x0000000000000000000000000000000000000000",
    TREASURY_V2: "0x0000000000000000000000000000000000000000",
    SOHM_V2: "0x0000000000000000000000000000000000000000",
    STAKING_V2: "0x0000000000000000000000000000000000000000",
  },
  1: {
    DAI_ADDRESS: "0x0000000000000000000000000000000000000000", // duplicate
    OHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    STAKING_ADDRESS: "0x0000000000000000000000000000000000000000", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0000000000000000000000000000000000000000",
    SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    WSOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    OLD_SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    PRESALE_ADDRESS: "0x0000000000000000000000000000000000000000",
    AOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATE_ADDRESS: "0x0000000000000000000000000000000000000000",
    DISTRIBUTOR_ADDRESS: "0x0000000000000000000000000000000000000000",
    BONDINGCALC_ADDRESS: "0x0000000000000000000000000000000000000000",
    CIRCULATING_SUPPLY_ADDRESS: "0x0000000000000000000000000000000000000000",
    TREASURY_ADDRESS: "0x0000000000000000000000000000000000000000",
    CRUCIBLE_OHM_LUSD: "0x0000000000000000000000000000000000000000",
    LQTY: "0x0000000000000000000000000000000000000000",
    MIST: "0x0000000000000000000000000000000000000000",
    REDEEM_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000",
    FUSE_6_SOHM: "0x0000000000000000000000000000000000000000", // Tetranode's Locker
    FUSE_18_SOHM: "0x0000000000000000000000000000000000000000", // Olympus Pool Party
    FUSE_36_SOHM: "0x0000000000000000000000000000000000000000", // Fraximalist Money Market
    PT_TOKEN_ADDRESS: "0x0000000000000000000000000000000000000000", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0x0000000000000000000000000000000000000000", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x0000000000000000000000000000000000000000", // NEW
    MIGRATOR_ADDRESS: "0x0000000000000000000000000000000000000000",
    GOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    FIATDAO_WSOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
  },
  42161: {
    DAI_ADDRESS: "0x0000000000000000000000000000000000000000", // duplicate
    OHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    STAKING_ADDRESS: "0x0000000000000000000000000000000000000000", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0000000000000000000000000000000000000000",
    SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    OLD_SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    PRESALE_ADDRESS: "0x0000000000000000000000000000000000000000",
    AOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATE_ADDRESS: "0x0000000000000000000000000000000000000000",
    DISTRIBUTOR_ADDRESS: "0x0000000000000000000000000000000000000000",
    BONDINGCALC_ADDRESS: "0x0000000000000000000000000000000000000000",
    CIRCULATING_SUPPLY_ADDRESS: "0x0000000000000000000000000000000000000000",
    TREASURY_ADDRESS: "0x0000000000000000000000000000000000000000",
    WSOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATOR_ADDRESS: "0x0000000000000000000000000000000000000000", // good
    GOHM_ADDRESS: "0x0000000000000000000000000000000000000000", // good
    REDEEM_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000",
  }, // TODO: Replace with Arbitrum contract addresses when ready
  421611: {
    DAI_ADDRESS: "0x0000000000000000000000000000000000000000", // duplicate
    OHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    STAKING_ADDRESS: "0x0000000000000000000000000000000000000000", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0000000000000000000000000000000000000000",
    SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    OLD_SOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    PRESALE_ADDRESS: "0x0000000000000000000000000000000000000000",
    AOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATE_ADDRESS: "0x0000000000000000000000000000000000000000",
    DISTRIBUTOR_ADDRESS: "0x0000000000000000000000000000000000000000",
    BONDINGCALC_ADDRESS: "0x0000000000000000000000000000000000000000",
    CIRCULATING_SUPPLY_ADDRESS: "0x0000000000000000000000000000000000000000",
    TREASURY_ADDRESS: "0x0000000000000000000000000000000000000000",
    // TODO (appleseed-lusd): swap this out
    PICKLE_OHM_LUSD_ADDRESS: "0x0000000000000000000000000000000000000000",
    REDEEM_HELPER_ADDRESS: "0x0000000000000000000000000000000000000000",
  }, // TODO: Replace with Arbitrum Testnet contract addresses when ready
  43113: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    // WSOHM_ADDRESS: "",
    // GOHM_ADDRESS: "",
    // MIGRATOR_ADDRESS: ""
  }, // TODO: Avalanche Testnet addresses
  43114: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    // STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    WSOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    GOHM_ADDRESS: "0x0000000000000000000000000000000000000000",
    MIGRATOR_ADDRESS: "0x0000000000000000000000000000000000000000",
  }, // TODO: Avalanche Mainnet addresses
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement;
  imageAltText: string;
  uri: () => string;
}

// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.
export const USER_SELECTABLE_NETWORKS = [1, 42161, 43114];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
export const NEWEST_NETWORK_ID = 43114;

export const NETWORKS: { [key: number]: INetwork } = {
  1: {
    chainName: "Ethereum",
    chainId: 1,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(1),
  },
  4: {
    chainName: "Rinkeby Testnet",
    chainId: 4,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(4),
  },
  42161: {
    chainName: "Arbitrum",
    chainId: 42161,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => NodeHelper.getMainnetURI(42161),
  },
  421611: {
    chainName: "Arbitrum Testnet",
    chainId: 421611,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => EnvHelper.alchemyArbitrumTestnetURI,
  },
  43113: {
    chainName: "Avalanche Fuji Testnet",
    chainId: 43113,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.alchemyAvalancheTestnetURI,
  },
  43114: {
    chainName: "Avalanche",
    chainId: 43114,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(43114),
  },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view
interface IViewsForNetwork {
  dashboard: boolean;
  stake: boolean;
  wrap: boolean;
  zap: boolean;
  threeTogether: boolean;
  bonds: boolean;
  network: boolean;
}

export const VIEWS_FOR_NETWORK: { [key: number]: IViewsForNetwork } = {
  1: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  4: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  42161: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  421611: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  43114: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  43113: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
};
