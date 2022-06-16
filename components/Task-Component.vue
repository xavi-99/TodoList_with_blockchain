<template>
  <div>
    <CustomCheckbox></CustomCheckbox>
    <!-- <input :task-id="task.identifier" type="checkbox" />
    {{ task.name }}
    <TaskStatus :status="task.status"></TaskStatus> -->
  </div>
</template>

<script>
import TaskStatus from "./Task-Status.vue";
import CustomCheckbox from "./custom-checkbox.vue";
export default {
  components: {
    TaskStatus,
    CustomCheckbox
  },
  name: "Task",
  props: ["task"],
};
</script>

<style></style>
