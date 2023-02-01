const { createApp } = Vue;

createApp({
  data() {
    return {
      listaUrl: "server.php",
      todoList: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      let params = {
        addTask: this.newTask,
      };
      axios.get(this.listaUrl, { params }).then((result) => {
        this.newTask = "";
        this.todoList = result.data;
      });
    },
  },
  mounted() {
    axios.get(this.listaUrl).then((result) => {
      this.todoList = result.data;
    });
  },
}).mount("#app");
