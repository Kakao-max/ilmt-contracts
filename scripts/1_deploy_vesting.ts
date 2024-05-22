import { ethers } from "hardhat"

async function main() {
  const ilmtVesting = await ethers.deployContract("ILMTVesting", [
    "0x65C15831CE68a46dCc8eEe1d5D29Ea3993c84963",
  ])

  await ilmtVesting.waitForDeployment()

  console.log("iluminary vesting deployed to:", ilmtVesting.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
