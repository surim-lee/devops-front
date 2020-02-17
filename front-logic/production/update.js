function parsePath(parse) {
    var params = parse.split('/')
    for (var i = 0; i < params.length; i++) {
        if (params[i] == "id") {
            if (i + 1 < params.length && params[i+1].length != 0) {
                return params[i+1]
            }
        }
    }
    return -1
}
    
var id = parsePath(window.location.pathname)

var create = new Vue({
    el: "#update",
    data() {
        return {
            entity: null,
            errored: null,
            update: null,
            delete: null,
        }
    },
    mounted() {
        axios.get("detail/endpoint/"+id)
        .then(response => {
            this.entity = response.data
        })
        .catch(error => {
            this.errored = true
            console.log(error)
        })

        this.update = "base/url/to/update/api" + id
        this.delete = "base/url/to/delete/api" + id

    },
})