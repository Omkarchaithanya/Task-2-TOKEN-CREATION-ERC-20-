# ERC-20 Token Creation (Sepolia Testnet)
## Internship Details

| Field | Details |
|-------|---------|
| **Company** | CODTECH IT SOLUTIONS PVT.LTD |
| **Name** | OMKAR CHAITHANYA R |
| **Intern ID** | CTIS4640 |
| **Domain** | Blockchain Technology |
| **Batch Duration** | 12 Weeks |
| **Mentor** | Neela Santhosh Kumar |

---
This project creates and deploys a custom ERC-20 token using Solidity and Hardhat.

## 1) Smart Contract

Contract file: `contracts/CustomERC20.sol`

Key behavior:
- Uses OpenZeppelin `ERC20`.
- Constructor accepts `name`, `symbol`, `initialSupply`, and `recipient`.
- Mints full initial supply once during deployment.
- Reverts if recipient is zero address.

## 2) Token Details (Current Configuration)

- Token Standard: ERC-20
- Network Target: Ethereum Sepolia Testnet
- Solidity Version: `0.8.24`
- Decimals: `18`
- Name: from `TOKEN_NAME` in `.env` (default `Task2 Token`)
- Symbol: from `TOKEN_SYMBOL` in `.env` (default `T2T`)
- Initial Supply: from `INITIAL_SUPPLY` in `.env` (default `1000000`)

## 3) Setup

```bash
npm install
copy .env.example .env
```

Edit `.env` with your Sepolia wallet private key and RPC URL.

## 4) Compile and Test

```bash
npm run compile
npm test
```

## 5) Deploy to Sepolia

```bash
npm run deploy:sepolia
```

The script prints:
- Network
- Deployer address
- Token name/symbol/supply
- Contract address
- Deployment transaction hash
- Sepolia Etherscan links

## 6) Deployment Proof (Submit This)

Use `DEPLOYMENT_PROOF.md` and fill these fields after running deployment:
- Contract Address
- Transaction Hash
- Network
- Deployer Address
- Etherscan Contract URL
- Etherscan Tx URL

You can also attach a terminal screenshot showing successful deployment output.
