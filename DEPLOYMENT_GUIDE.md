# ERC-20 Token Deployment Guide

## Contract Status
✅ **Smart Contract:** CustomERC20.sol - COMPLETE
✅ **Tests:** All 3 tests passing
✅ **Gas Estimate:** ~560,629 gas for deployment

---

## Getting Ready for Deployment

### Step 1: Get Sepolia Test ETH
You'll need a small amount of ETH on Sepolia testnet to pay gas fees:

1. **Get Sepolia ETH from a faucet:**
   - https://www.alchemy.com/faucets/ethereum-sepolia
   - https://sepoliafaucet.com/
   - https://www.infura.io/faucet/sepolia

2. **Paste your wallet address** (without 0x prefix in most cases)
3. **Receive test ETH** (usually arrives within minutes)

### Step 2: Get Your Private Key

⚠️ **SECURITY WARNING:** Never share your private key! Keep it secret.

**From MetaMask:**
1. Click the account icon (top right)
2. Click "Account Details"
3. Click "Show private key"
4. Copy the entire key (including "0x" prefix)

**From Other Wallets:**
- Follow your wallet's documentation for exporting the private key

### Step 3: Get Etherscan API Key (Optional but Recommended)

1. Visit https://etherscan.io/apis
2. Create an account if needed
3. Generate an API key
4. This allows automatic contract verification on Etherscan

---

## Update Your .env File

Open `.env` and add your actual values:

```
# Real RPC endpoint (current is public and works fine)
SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com

# Your wallet's FULL private key (starts with 0x)
PRIVATE_KEY=0x1234567890123456789012345678901234567890123456789012345678901234

# Your Etherscan API key (optional)
ETHERSCAN_API_KEY=your_etherscan_api_key_here

# Token settings (can customize)
TOKEN_NAME=Task2 Token
TOKEN_SYMBOL=T2T
INITIAL_SUPPLY=1000000
```

---

## Deploy to Sepolia Testnet

Run this command in your terminal:

```bash
npm run deploy:sepolia
```

### Expected Output:
```
Network: sepolia
Deployer: 0x... (your address)
Token Name: Task2 Token
Token Symbol: T2T
Initial Supply: 1000000
Deployment completed.
Token Contract Address: 0x...
Deployment Tx Hash: 0x...
Etherscan Tx: https://sepolia.etherscan.io/tx/0x...
Etherscan Contract: https://sepolia.etherscan.io/address/0x...
```

### Copy This Output!
You'll need it to fill in:
- `TOKEN_DETAILS.md`
- `DEPLOYMENT_PROOF.md`

---

## After Deployment

1. **Verify on Etherscan** - Visit the contract link and check the code
2. **Interact with Token:**
   - Send tokens to other addresses
   - Check balance at Etherscan
   - Verify total supply is 1,000,000 (with 18 decimals)

3. **Fill in Deliverables:**
   - Update `TOKEN_DETAILS.md` with deployment info
   - Update `DEPLOYMENT_PROOF.md` with console output and links

---

## Troubleshooting

### "Invalid private key format"
- Make sure key starts with "0x"
- Key must be exactly 64 hex characters (plus 0x prefix)
- Check for extra spaces or quotes

### "Insufficient funds"
- Get more Sepolia test ETH from faucets listed above
- Wait a few minutes after faucet request

### "RPC endpoint is not responding"
- Try a different RPC URL from Infura, Alchemy, or PublicNode
- Check your internet connection

### "Already deployed to this address?"
- Each deployment creates a new contract address
- You can deploy multiple times to test

---

## Files Overview

- `contracts/CustomERC20.sol` - The smart contract
- `scripts/deploy.js` - Deployment script
- `test/CustomERC20.test.js` - Unit tests
- `.env` - Configuration (git-ignored for security)
- `TOKEN_DETAILS.md` - Token information (fill after deploy)
- `DEPLOYMENT_PROOF.md` - Evidence of deployment (fill after deploy)

---

## Contract Features

✅ **Standard ERC-20** - Full OpenZeppelin implementation
✅ **Custom Name & Symbol** - Configurable via constructor
✅ **Initial Supply Minting** - Automatically minted to deployer
✅ **Decimals Support** - Standard 18 decimals (like Ether)
✅ **Security** - Validates recipient address (no zero address burn)
✅ **Optimized** - Compiled with optimizer (200 runs)

---

**Ready? Run: `npm run deploy:sepolia`**
