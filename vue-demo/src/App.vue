<template>
  <div id="app">
    <img src="./assets/logo.png">
    <child v-bind:message="parentMsg" v-on:listenToChildEvent="showMsgFromChild"></child>
  </div>
</template>

<script>
import child from './components/Child'

export default {
  name: 'app',
  data(){
    return {
      parentMsg:"hello,child"
    }
  },
  methods:{
    showMsgFromChild:function(data){
      alert(data);
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>
