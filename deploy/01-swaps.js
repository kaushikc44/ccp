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

    log("--------------------------------------")



}

module.exports.tags = ["all", "Swaps", "main"]
