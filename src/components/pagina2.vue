<template class="fundo">
  <div class="fundo">
    <div class="corpo">
    <h1>Segunda Pagina</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagina2',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .fundo{
   padding: 0;
   margin: 0;
   background-color: yellow;
   min-width: 100%;
   height: 100%;
   position: absolute;
   
 }
 .corpo{
   width: 500px;
   height: 800px;
   background-color: white;
   position:relative;
   align-items: center;
   align-content: center;
   display: block;
   direction: initial;
   margin: 50px auto;

 }
</style>
