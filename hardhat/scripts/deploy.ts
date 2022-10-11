import { ethers } from "hardhat";

async function main() {
	const metadataUrl = "ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ/";

	const lw3PunksContract = await ethers.getContractFactory("LW3Punks");
	const deployedLW3Contract = await lw3PunksContract.deploy(metadataUrl);
	await deployedLW3Contract.deployed();

	console.log("LW3Punks deployed to:", deployedLW3Contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
