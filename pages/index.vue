<template>
  <div>
    <Task :task="taskInfo"></Task>
  </div>
</template>

<script>
import TodoListJSON from "../assets/todoListConfig.json";
import { ethers } from "ethers";
import Task from "../components/Task-Component.vue";
export default {
  components: {
    Task
  },
  data() {
    return {
      provider: null,
      signer: null,
      contract: null,
      taskInfo: {
        identifier: "1",
        name: "adssadsa",
        status: "0"
      },

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
    this.$store.commit('todolist/setTasks', tasks);
  },
   methods: {

    },
};
</script>

<style></style>
