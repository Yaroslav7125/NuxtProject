<template>
  <div class="content">
    <Todo
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
      @deleteTodo="deleteTodo"
      @changeTodoTitle="changeTodoTitle"
      @ChangeTodoCompleted="ChangeTodoCompleted"
    />
  </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
  props: ['todos'],
  components: {
    Todo: Todo,
  },
  methods: {
    deleteTodo (id) {
      this.$emit('deleteTodo', id);
    },
    changeTodoTitle (index, StrTitle) {
      ///
      this.$emit('changeTodoTitle', index, StrTitle);
    },
    ChangeTodoCompleted (index) {
      this.$emit('ChangeTodoCompleted', index);
    },
  },
};
</script>
