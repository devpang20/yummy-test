<template>
     <nav class="menu-nav">
        <ul>
            <li class="item"><a href="">한식</a></li>
            <li class="item"><a href="">일식</a></li>    
            <li class="item"><a href="">중식</a></li>
        </ul>
        <ul>
            <li class="item"><a href="">분식</a></li>
            <li class="item"><a href="">동남아</a></li>    
            <li class="item"><a href="">퓨전</a></li>
        </ul>
        <ul>
            <li class="item"><a href="">치킨</a></li>
            <li class="item"><a href="">피자</a></li>    
            <li class="item"><a href="">족발</a></li>
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