// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomERC20 is ERC20 {
    error ZeroAddressRecipient();

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        address recipient_
    ) ERC20(name_, symbol_) {
        if (recipient_ == address(0)) revert ZeroAddressRecipient();
        _mint(recipient_, initialSupply_);
    }
}
