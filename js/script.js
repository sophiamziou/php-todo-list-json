const { createApp } = Vue;

createApp({
  data() {
    return {
      listaUrl: "server.php",
      // deleteUrl: "delete.php",
      todoList: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      const data = {
        addTask: this.newTask,
      };
      axios
        .post(this.listaUrl, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.newTask = "";
          this.todoList = response.data;
        });
    },
    deleteTask(index) {
      const data = {
        deleteTask: index,
      };
      axios
        .post(this.listaUrl, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.todoList = response.data;
        });
    },
  },
  mounted() {
    axios.get(this.listaUrl).then((result) => {
      this.todoList = result.data;
    });
  },
}).mount("#app");
