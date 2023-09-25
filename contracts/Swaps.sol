// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface  IUniswapRouter {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

}

interface IERC20{
     function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

interface IWETH is IERC20 {
    function deposit() external payable;

    function withdraw(uint amount) external;
}

contract  Swaps {

    address private constant router =  0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;

    address private constant usdt = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address private constant usdc = 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d;


    IUniswapRouter private uniswapRouter = IUniswapRouter(router);
    IERC20 private USDT = IERC20(usdt);
    IERC20 private USDC = IERC20(usdc);

    function swapSingleHopExactAmountIn(
        uint amountIn,
        uint amountOutMin
    ) external returns (uint amountOut) {
        USDT.transferFrom(msg.sender, address(this),amountIn);
        USDT.approve(address(router),amountIn);

        address[] memory path;
        path = new address[](2);

        path[0] = usdt;
        path[1] = usdc;

        uint[] memory amounts = uniswapRouter.swapExactTokensForTokens(amountIn,amountOutMin,path,msg.sender,block.timestamp);

        return amounts[1];

    }

}