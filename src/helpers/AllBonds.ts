import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OHM-DAI.svg";
import { ReactComponent as FraxImg } from "src/assets/tokens/FRAX.svg";
import { ReactComponent as OhmFraxImg } from "src/assets/tokens/OHM-FRAX.svg";
import { ReactComponent as OhmLusdImg } from "src/assets/tokens/OHM-LUSD.svg";
import { ReactComponent as OhmEthImg } from "src/assets/tokens/OHM-WETH.svg";
import { ReactComponent as wETHImg } from "src/assets/tokens/wETH.svg";
import { ReactComponent as LusdImg } from "src/assets/tokens/LUSD.svg";
import { ReactComponent as CvxImg } from "src/assets/tokens/CVX.svg";

import { abi as FraxOhmBondContract } from "src/abi/bonds/OhmFraxContract.json";
import { abi as BondOhmDaiContract } from "src/abi/bonds/OhmDaiContract.json";
import { abi as BondOhmLusdContract } from "src/abi/bonds/OhmLusdContract.json";
import { abi as BondOhmEthContract } from "src/abi/bonds/OhmEthContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as ReserveOhmLusdContract } from "src/abi/reserves/OhmLusd.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json";
import { abi as ReserveOhmFraxContract } from "src/abi/reserves/OhmFrax.json";
import { abi as ReserveOhmEthContract } from "src/abi/reserves/OhmEth.json";

import { abi as FraxBondContract } from "src/abi/bonds/FraxContract.json";
import { abi as LusdBondContract } from "src/abi/bonds/LusdContract.json";
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";
import { abi as CvxBondContract } from "src/abi/bonds/CvxContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { getBondCalculator } from "src/helpers/BondCalculator";
import { BigNumberish } from "ethers";
import { getTokenPrice } from "src/helpers";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "dai",
  displayName: "DAI",
  bondToken: "DAI",
  payoutToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "Sold Out",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x86f4d2D3E6BC14a8bfc44D4f63b5325cc5e12E0f",
      reserveAddress: "0xD89b31B398d29ba726582B42C9B43769274507cE",
    },
  },
});

export const frax = new StableBond({
  name: "frax",
  displayName: "FRAX",
  bondToken: "FRAX",
  payoutToken: "ZVE",
  bondIconSvg: FraxImg,
  bondContractABI: FraxBondContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "Gone Fishin'",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x4E5f6a198719709EFC234ac1f586Be0dCD3E80D5",
      reserveAddress: "0xe27D88687361c32A7696029999bF07937db61d68",
    },
  },
});

export const lusd = new StableBond({
  name: "lusd",
  displayName: "LUSD",
  bondToken: "LUSD",
  payoutToken: "ZVE",
  bondIconSvg: LusdImg,
  bondContractABI: LusdBondContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
});

export const eth = new CustomBond({
  name: "eth",
  displayName: "wETH",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "wETH",
  payoutToken: "ZVE",
  bondIconSvg: wETHImg,
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "Taking a Spa Day",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice: BigNumberish = await ethBondContract.assetPrice();
    ethPrice = Number(ethPrice.toString()) / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount: BigNumberish = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = Number(ethAmount.toString()) / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});

export const cvx = new CustomBond({
  name: "cvx",
  displayName: "CVX",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "CVX",
  payoutToken: "ZVE",
  bondIconSvg: CvxImg,
  bondContractABI: CvxBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000", // using DAI per `principal` address
      // reserveAddress: "0x6761Cb314E39082e08e1e697eEa23B6D1A77A34b", // guessed
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    let cvxPrice: number = await getTokenPrice("convex-finance");
    const token = this.getContractForReserve(networkID, provider);
    let cvxAmount: BigNumberish = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    cvxAmount = Number(cvxAmount.toString()) / Math.pow(10, 18);
    return cvxAmount * cvxPrice;
  },
});

// the old convex bonds. Just need to be claimable for the users who previously purchased
export const cvx_expired = new CustomBond({
  name: "cvx-v1",
  displayName: "CVX OLD",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "CVX",
  payoutToken: "ZVE",
  bondIconSvg: CvxImg,
  bondContractABI: CvxBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000", // using DAI per `principal` address
      // reserveAddress: "0x6761Cb314E39082e08e1e697eEa23B6D1A77A34b", // guessed
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    let cvxPrice: number = await getTokenPrice("convex-finance");
    const token = this.getContractForReserve(networkID, provider);
    let cvxAmount: BigNumberish = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    cvxAmount = Number(cvxAmount.toString()) / Math.pow(10, 18);
    return cvxAmount * cvxPrice;
  },
});

export const ohm_dai = new LPBond({
  name: "ohm_dai_lp",
  displayName: "OHM-DAI LP",
  bondToken: "DAI",
  payoutToken: "ZVE",
  bondIconSvg: OhmDaiImg,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x383518188c0c6d7730d91b2c03a03c837814a899/0x6b175474e89094c44da98b954eedeac495271d0f",
});

export const ohm_frax = new LPBond({
  name: "ohm_frax_lp",
  displayName: "ZVE-FRAX LP",
  bondToken: "FRAX",
  payoutToken: "ZVE",
  bondIconSvg: OhmFraxImg,
  bondContractABI: FraxOhmBondContract,
  reserveContract: ReserveOhmFraxContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "Out of Office",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  lpUrl:
    "https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/0x383518188c0c6d7730d91b2c03a03c837814a899",
});

export const ohm_lusd = new LPBond({
  name: "ohm_lusd_lp",
  displayName: "OHM-LUSD LP",
  bondToken: "LUSD",
  payoutToken: "ZVE",
  bondIconSvg: OhmLusdImg,
  bondContractABI: BondOhmLusdContract,
  reserveContract: ReserveOhmLusdContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      // NOTE (appleseed-lusd): using ohm-dai rinkeby contracts
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x383518188C0C6d7730D91b2c03a03C837814a899/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
});

export const ohm_weth = new CustomBond({
  name: "ohm_weth_lp",
  displayName: "ZVE-WETH LP",
  bondToken: "WETH",
  payoutToken: "ZVE",
  bondIconSvg: OhmEthImg,
  bondContractABI: BondOhmEthContract,
  reserveContract: ReserveOhmEthContract,
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  LOLmessage: "Maternity Leave",
  isClaimable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      // NOTE (unbanksy): using ohm-dai rinkeby contracts
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  bondType: BondType.LP,
  lpUrl:
    "https://app.sushi.com/add/0x383518188c0c6d7730d91b2c03a03c837814a899/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    if (networkID === NetworkID.Mainnet) {
      const ethBondContract = this.getContractForBond(networkID, provider);
      let ethPrice: BigNumberish = await ethBondContract.assetPrice();
      ethPrice = Number(ethPrice.toString()) / Math.pow(10, 8);
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
      const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress || "");
      let tokenUSD =
        (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
      return tokenUSD * Number(ethPrice.toString());
    } else {
      // NOTE (appleseed): using OHM-DAI on rinkeby
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
      const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress || "");
      let tokenUSD =
        (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
      return tokenUSD;
    }
  },
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
// export const allBonds = [dai, frax, eth, cvx, ohm_dai, ohm_frax, lusd, ohm_lusd, ohm_weth];
export const allBonds = [dai, frax];
// TODO (appleseed-expiredBonds): there may be a smarter way to refactor this
export const allExpiredBonds = [cvx_expired];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
