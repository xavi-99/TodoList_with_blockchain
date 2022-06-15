<template>
  <div>
    <h1>Hello Todolist</h1>
    <p>This is a basic template caling get tasks from my smartcontract.</p>
  </div>
</template>

<script>
import TodoListJSON from "../assets/todoListConfig.json";
import { ethers } from "ethers";
export default {
  data() {
    return {
      provider: null,
      signer: null,
      contract: null,
    };
  },
  async mounted() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.signer = this.provider.getSigner();
    this.contract = new ethers.Contract(
      TodoListJSON.address,
      TodoListJSON.abi,
      this.signer
    );
    let tasks = await this.contract.getTaskList();
    console.log(tasks);
  },
};
</script>

<style></style>
