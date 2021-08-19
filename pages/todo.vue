<template>
  <div className='todo-content'>
    <div id='app'>
      <h1>My todo list!</h1>
      <AddTodo
        userInput='userInput'
        @updateUserInput='userInput = $event'
        @addTodo='pushTodo'
      />
      <TodoList
        :todos='filteredTodos'
        @deleteTodo='deleteTodo'
        @сhangeTodoCompleted='changeTodoCompleted'
        @changeTodoTitle='changeTodoTitle'
      />
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import axios from 'axios';
//import * as dotenv from 'dotenv';
//dotenv.config();
//
axios.defaults.baseURL = process.env.BASE_URL||'http://localhost:3001/';
export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
      userInput: '',
    };
  },
  methods: {
    async pushTodo(newTodo) {
      axios.post('/tasks', newTodo).then((resp) => {
        axios.get('/tasks').then((response) => {
          this.todos = response.data;
        });
      });
    },
    deleteTodo(id) {
      axios.delete(`/tasks/${id}`).then((resp) => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
    },
    changeTodoCompleted(todo) {
      //let todo = this.todos.filter((todo)=>todo.id == todo);
      axios.put(`/tasks/change-completed/${todo.id}`, { todoCompleted: !todo.completed }).then((resp) => {
        todo.completed = resp.data.completed;
      });
    },
    changeTodoTitle(todo, strTitle) {
      axios.put(`/tasks/change-title/${todo.id}`, { strTitle: strTitle }).then((resp) => {
        todo.title = resp.data.title;
      });
    },
  },
  computed: {
    filteredTodos: function() {
      this.todos.sort((todo1, todo2) => todo1.id > todo2.id ? 1 : -1); // сортируем тудушки
      if (this.userInput != '') {
        return this.todos.filter(t => t.title.includes(this.userInput));
      } else {
        return this.todos;
      }
    },
  },
  mounted: function() {
    axios.get('/tasks').then((response) => {
      this.todos = response.data;
    });
  },
};
</script>

<style scoped lang='scss'>
.todo-content {
  padding-top: 24px;
  h1{
    margin: auto;
    color: red;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
}
</style>
