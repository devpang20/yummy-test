<template>
     <nav class="menu-nav">
        <ul>
            <li class="item"> <router-rink to="/list">메뉴</router-rink></li>
            <li class="item"> <router-rink>메뉴</router-rink></li>
            <li class="item"> <router-rink>메뉴</router-rink></li>
        </ul>
        <ul>
           <li class="item"> <router-rink>메뉴</router-rink></li>
           <li class="item"> <router-rink>메뉴</router-rink></li>
           <li class="item"> <router-rink>메뉴</router-rink></li> 
        </ul>
        <ul>
          <li class="item"> <router-rink>메뉴</router-rink></li>
           <li class="item"> <router-rink>메뉴</router-rink></li>
           <li class="item"> <router-rink>메뉴</router-rink></li>
        </ul>
      </nav> 
</template>

<script>
export default {

}
</script>

<style>
   body, ul, li, h1{
    margin:0;
    padding:0;
    list-style:none;
  }
  .menu-nav{
    text-align: center;
  }
  ul{
    display:inline-block;
    
  }
  li{
    padding: 100 20px;
  }
</style>