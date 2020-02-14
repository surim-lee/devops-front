var create = new Vue({
    el: "#new",
    data() {
        return {
            title: null,
            author: null,
            content: null,
            password: null,
        }
    },
    methods: {
        submit: function() {
            let self = this

            if (self.title.length == 0 || self.author.length == 0 || self.content.length == 0 || self.password.length == 0) {
                alert("Every field should be filled!")
                return
            }

            axios.post("uri/to/post", {
                title: self.title,
                author: self.author,
                content: self.content,
                password: self.password,
                // ID (AUTO_INCREMENT) and Date (default (CURRENT_DATE)) will be automatically generate in DB
            })
            .then((reponse)=> {
                alert(response.data.message)
                const status = JSON.parse(response.data.response.status);
            })
            .catch((error)=> {
                alert("Error Occured!")
            })

            // redirect after Vue action logic, needs to be tested
            if (status == '200') {
                self.$router.push("/route/to/redirect")
            }
        }
    }
})