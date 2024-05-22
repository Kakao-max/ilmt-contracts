import { ethers } from "hardhat"

async function main() {
  const mockToken = await ethers.deployContract("MockToken")

  await mockToken.waitForDeployment()

  console.log("Mock Token deployed to:", mockToken.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
