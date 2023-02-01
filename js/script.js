const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            listaUrl:'server.php',
            todoList: [],
        }
    },
    mounted(){
        axios.get(this.listaUrl).then((result) => {
            this.todoList = result.data
        })
    }
}).mount('#app')