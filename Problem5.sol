interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalance {
    function getBalances(address wallet_address, address[] memory token_addresses) 
    public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](token_addresses.length);
        for (uint256 i = 0 ; i < token_addresses.length; i++) {
            ERC20 token = ERC20(token_addresses[i]);
            uint256 balance = token.balanceOf(wallet_address);
            balances[i] = balance;
        }
        return balances;
    }
}