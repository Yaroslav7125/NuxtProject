<template>
    <div class="content">
        <Todo 
        v-for="(todo, index) in todos"
        v-bind:todo='todo'
        v-bind:index='index'
        v-on:deleteTodo="deleteTodo"
        v-on:changeTodoTitle="changeTodoTitle"
        v-on:ChangeTodoCompleted="ChangeTodoCompleted"
        />
    </div>
</template>

<script>
import Todo from './Todo.vue'
export default{
    props:['todos'],
    components:{
        Todo:Todo
    },
    methods:{
      deleteTodo(id){
          this.$emit('deleteTodo', id);
      },
      changeTodoTitle(index, StrTitle){
                                              ///
          this.$emit('changeTodoTitle', index, StrTitle);
      },
      ChangeTodoCompleted(index){
          this.$emit('ChangeTodoCompleted', index);
      }
    },
}
</script>
