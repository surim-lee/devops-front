var main = new Vue({
    el: "#listAll",
    data() {
        return {
            posts: null,
            errored: false, //probably will use later
        }
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
            this.posts = response.data
        })
        .catch(error => {
            this.errored = true
            console.log(error)
        })

    },
})

