var main = new Vue({
    el: "#listAll",
    data() {
        return {
            posts: null,
            errored: false, //probably will use later
            links: null,
        }
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
            this.posts = response.data
            this.links = response.data.map((entry)=>("base/url"+entry.userId))
        })
        .catch(error => {
            this.errored = true
            console.log(error)
        })

    },
})

