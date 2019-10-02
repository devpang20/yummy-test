<template>
     <nav class="menu-nav">
        <ul>
          <li class="item">아이템1</li>
          <li class="item">아이템2</li>
          <li class="item">아이템3</li>
        </ul>
        <ul>
          <li class="item">아이템4</li>
          <li class="item">아이템5</li>
          <li class="item">아이템6</li>
        </ul>
        <ul>
          <li class="item">아이템7</li>
          <li class="item">아이템8</li>
          <li class="item">아이템9</li>          
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