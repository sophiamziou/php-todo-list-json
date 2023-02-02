const { createApp } = Vue;

createApp({
  data() {
    return {
      listaUrl: "server.php",
      todoList: [],
      newTask: "",
      alertMsg: "",
    };
  },
  methods: {
    addTask() {
      const data = {
        addTask: this.newTask,
      };
      if (this.newTask.trim() != "" && this.newTask != "") {
        axios
          .post(this.listaUrl, data, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            this.newTask = "";
            this.todoList = response.data;
          });
      } else {
        this.alertMsg = "Devi scrivere qualcosa!";
      }
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
