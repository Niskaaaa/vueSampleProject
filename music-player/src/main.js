import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
  el: '#app',
  data: {
    query: "",
    musicList: [],
    musicUrl:""
  },
  methods: {
    searchMusic: function () {
      console.log("111")
      var that = this;
      axios.get('/api'+`/search?keywords=${this.query}/`)
        .then(function(response) {
          console.log(response);
          that.musicList = response.data.result.songs

        },function(err){})
    },
    playMusic:function(id){
      var that = this;
      axios.get('api'+`song/url?id=${id}`).then(function(response){
        that.musicUrl=response.data.data[0].url
      })


    }
  }
})
