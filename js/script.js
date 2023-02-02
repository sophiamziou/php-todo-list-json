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
    // addTask() {
    //   let params = {
    //     addTask: this.newTask,
    //   };
    //   axios.get(this.listaUrl, { params }).then((result) => {
    //     this.newTask = "";
    //     this.todoList = result.data;
    //   });
    // },
    deleteTask(index) {
      let params = {
        deleteTask: index,
      };
      axios.get(this.listaUrl, { params }).then((result) => {
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
