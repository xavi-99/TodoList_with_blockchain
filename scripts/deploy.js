const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.getBalance();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", balance.toString());

  // deploy the contract
  const TodoList = await hre.ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();
  console.log("Deploying...");

  await todoList.deployed();
  console.log("TodoList contract deployed");
  console.log("TodoList contract Address" + todoList.address);

  const data = {
    address: todoList.address,
    abi: JSON.parse(todoList.interface.format("json")),
  };

  fs.writeFileSync("./assets/todoListConfig.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
