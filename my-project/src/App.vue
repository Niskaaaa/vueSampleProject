<template>
  <span ref='countup'></span>
</template>

<script>
import { CountUp } from 'countup.js';
export default {
  name: 'countup-demo',
  data () {
    return {
      numAnim:null
    }
  },
  mounted(){
    this.initCountUp()
  },
  methods:{
    initCountUp(){
      
this.numAnim = new CountUp(this.$refs.countup, 
  
                           this.end,

                           this.options)
      this.numAnim.start();
    }
  },
  props: {

  end: {
    type: Number,
    default: 2017
  },

  options: {
    type: Object
  }
}
}
</script>