new Vue({
    el: "#oioi",
    data: {
        message: "URL HERE",
    },
    methods: {
        fetchData: function() {
            axios.get(this.message)
              .then(function(response) {
                console.log(response);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        }
    })
