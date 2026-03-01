# DEPLOYMENT CHECKLIST - Quick Reference

## Pre-Deployment Checklist ✓

### Wallet & Testnet Setup
- [ ] **MetaMask Installed** - Download from metamask.io
- [ ] **Wallet Created/Imported** - Have your Ethereum wallet ready
- [ ] **Network Switched to Sepolia** - In MetaMask, select "Sepolia" network
- [ ] **Have Sepolia Test ETH** - At least 0.1 ETH for gas fees
  - Get from faucet: https://sepoliafaucet.com
  
### Configuration
- [ ] **Private Key Obtained** - From your wallet (MetaMask > Account Details > Show Private Key)
- [ ] **.env File Updated** - Copied from .env.example and filled in:
  ```
  PRIVATE_KEY=0x... (your actual key)
  ```
- [ ] **Private Key Format Valid** - Starts with 0x and is 66 characters total

### Code Status
- [ ] **Tests Pass** - `npm test` shows 3/3 passing ✅
- [ ] **Contract Compiles** - `npm run compile` works without errors
- [ ] **Dependencies Installed** - `npm install` completed

---

## Deployment Steps (5 minutes)

### Step 1: Final Verification
```bash
# Check everything works
npm test
```
**Expected:** 3 passing tests ✅

### Step 2: Deploy!
```bash
# Deploy to Sepolia testnet
npm run deploy:sepolia
```

### Step 3: Copy Output
**You'll see something like:**
```
Network: sepolia
Deployer: 0x742d35Cc6634C0532925a3b844Bc9e7595f42fE0
Token Name: Task2 Token
Token Symbol: T2T
Initial Supply: 1000000

Deployment completed.
Token Contract Address: 0xabcd1234...
Deployment Tx Hash: 0x1234abcd...
Etherscan Tx: https://sepolia.etherscan.io/tx/0x1234abcd...
Etherscan Contract: https://sepolia.etherscan.io/address/0xabcd1234...
```

**COPY AND SAVE THIS OUTPUT!**

---

## Post-Deployment Steps (2 minutes)

### Step 1: Verify on Etherscan
1. Click the "Etherscan Contract" link from deployment output
2. Confirm you see:
   - Contract code visible
   - Token name: "Task2 Token"
   - Symbol: "T2T"
   - Total Supply: 1,000,000 T2T

### Step 2: Update TOKEN_DETAILS.md
Replace the empty fields with deployment output:
- **Deployer Wallet:** 0x742d35Cc6634C0532925a3b844Bc9e7595f42fE0
- **Contract Address:** 0xabcd1234...
- **Deployment Transaction Hash:** 0x1234abcd...
- **Etherscan Contract Link:** https://sepolia.etherscan.io/address/0xabcd1234...
- **Etherscan Transaction Link:** https://sepolia.etherscan.io/tx/0x1234abcd...

### Step 3: Update DEPLOYMENT_PROOF.md
Paste the entire console output showing:
- All deployment details
- Contract address
- Transaction hash
- Etherscan links

---

## Troubleshooting Checklist

### ❌ "Invalid private key format"
- [ ] Private key starts with "0x"
- [ ] Private key is exactly 66 characters (0x + 64 hex digits)
- [ ] No extra spaces before or after
- [ ] No line breaks in the middle

### ❌ "Insufficient funds"
- [ ] Go to https://sepoliafaucet.com
- [ ] Paste your wallet address (without 0x)
- [ ] Request test ETH
- [ ] Wait 2-3 minutes
- [ ] Refresh Etherscan to confirm receipt

### ❌ "Connection refused" or RPC errors
- [ ] Check internet connection
- [ ] Try a different RPC endpoint
- [ ] Update SEPOLIA_RPC_URL in .env to:
  - `https://sepolia.infura.io/v3/YOUR_INFURA_ID`
  - Or request from Alchemy/QuickNode

### ❌ "Contract already deployed"
- This is fine! Each deployment creates a new contract
- Each deployment gets a unique address
- You can deploy multiple test versions

---

## Final Verification

Before submitting, verify all THREE files are complete:

1. **Smart Contract Code:** `contracts/CustomERC20.sol`
   - [ ] File exists
   - [ ] Code is syntactically correct
   - [ ] All tests pass

2. **TOKEN_DETAILS.md**
   - [ ] Has all deployment information filled in
   - [ ] Contains valid contract address
   - [ ] Etherscan links work and show the contract

3. **DEPLOYMENT_PROOF.md**
   - [ ] Has deployment date
   - [ ] Shows complete console output
   - [ ] Includes working Etherscan links
   - [ ] Transaction is confirmed on Sepolia

---

## Files Generated for This Task

```
contracts/CustomERC20.sol          ← The contract
scripts/deploy.js                  ← Deployment automation
test/CustomERC20.test.js           ← Passing tests ✅
.env                               ← Your config (DO NOT COMMIT)
.env.example                       ← Template
TOKEN_DETAILS.md                   ← FILL AFTER DEPLOY
DEPLOYMENT_PROOF.md                ← FILL AFTER DEPLOY
DEPLOYMENT_GUIDE.md                ← Detailed guide
PROJECT_SUMMARY.md                 ← Overview
```

---

## Success Indicators ✅

You'll know it worked when:
- ✅ Deployment console says "Deployment completed"
- ✅ You see valid contract address (0x...)
- ✅ You see valid transaction hash (0x...)
- ✅ Etherscan link shows your contract code
- ✅ Can view token on Etherscan with your name and symbol

---

## Questions? 🆘

- **Wallet issues?** - Check MetaMask guides
- **Test ETH not arriving?** - Try multiple faucets
- **Private key problems?** - Make sure it's exactly 66 chars (0x + 64 hex)
- **RPC errors?** - Try Infura/Alchemy RPC endpoints
- **Deployment fails?** - Check error message and .env file

---

**Status: READY TO DEPLOY!** 🚀

Generated: March 1, 2026
