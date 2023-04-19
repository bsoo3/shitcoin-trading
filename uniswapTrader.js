import { ethers } from 'ethers';
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json' assert { type: 'json' };
import { abi as SwapRouterABI } from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json' assert { type: 'json' };
import { getPoolImmutables, getPoolState } from './helpers.js';
import ERC20ABI from './abi.json' assert { type: 'json' };
import { config } from 'dotenv';




config();
const INFURA_URL_MAINNET = process.env.INFURA_URL_MAINNET
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const WALLET_SECRET = process.env.WALLET_SECRET



const provider = new ethers.providers.JsonRpcBatchProvider(INFURA_URL_MAINNET) // rapsten
const poolAddress = "0x4D7C363DED4B3b4e1F954494d2Bc3955e49699cC" //UNI/WETH
const swapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564'

const name0 = 'Wrapped Ether'
const symbol0 = 'WETH'
const decimals0 = 18
const address0 = '0xc778417e063141139fce010982780140aa0cd5ab'



const name1 = 'Uniswap Token'
const symbol1 = 'UNI'
const decimals1 = 18
const address1 = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'

async function main() {
    
    const poolContract = new ethers.Contract(
        poolAddress, 
        IUniswapV3PoolABI,
        provider
    )

    const imutables = await getPoolImmutables(poolContract)
    const state = await getPoolState(poolContract)


}

main()