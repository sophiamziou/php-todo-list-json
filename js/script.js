const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            listaUrl:'server.php',
            todolist: [],
            newTask:'',
        }
    },
    mounted(){
        axios.get(this.listaUrl).then((result) => {
            this.todolist = result.data
        })
    }
}).mount('#app')