const {network} = require("hardhat")

module.exports = async function ({getNamedAccounts,deployments}){
    console.log("Entered the deployment");
    await console.log(getNamedAccounts);
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()

    
    
    log("------------------------------")

    const args= []
    const basicNft = await deploy("Swaps",{
        from:deployer,
        args:args,
        log:true,
        waitConfirmations:1
    })

    const amountOutMin = ethers.utils.parseUnits("1", "wei"); // Adjust this value as needed
    const tx = await basicNft.swapEthforTokens(amountOutMin, {
      value: ethers.utils.parseEther("0.1"),  // Sending 0.1 Ether, adjust this value as needed
    });


    console.log(tx)

    log("--------------------------------------");

 


}

module.exports.tags = ["all", "Swaps", "main"]
