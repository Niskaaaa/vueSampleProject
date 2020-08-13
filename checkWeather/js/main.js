var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {

        search: function () {
            console.log(this.city)

            that=this

            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function (response) {

                that.weatherList = response.data.data.forecast
                console.log(that.weatherList[0].date)
            })

        },

        changeCity:function(str){
            this.city = str
            this.search()
        }

    }
})