const TodoListApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false
      }
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false
        };
        localStorage.setItem('todos', JSON.stringify(this.todos));
      } else {
        alert("to do input is empty");
      }
    }
  },
  created() {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos
  },
  updated() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

Vue.createApp(TodoListApp).mount('#app');