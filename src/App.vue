<template>
    <div id="app"> 
       <yummyHeader></yummyHeader>
       <yummyNav></yummyNav>
       <yummyFooter></yummyFooter>
    </div>
</template>


<script>
import yummyHeader from './components/yummyHeader.vue'
import yummyNav from './components/yummyNav.vue'
import yummyFooter from './components/yummyFooter.vue'

export default {  
  components:{
    'yummyHeader' : yummyHeader,
    'yummyNav' : yummyNav,
    'yummyFooter' : yummyFooter,
  }
}
</script>

<style>
  #app{
    margin-top : 300px;
  }
</style>