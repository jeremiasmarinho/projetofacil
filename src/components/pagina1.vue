<template>
  <div class="fundo">
      <div class="corpo">
        <div class="img">
            <img src="../assets/desktop-pagina-1.png" class="img-fluid" alt="...">
        </div>
          <div class="titulo">  
              <div class="conteudo"> 
                   <div>
                      <h1>Sobre o profissional</h1>
                  </div>
                  <div class="subtitulo">
                    <h3>Dados do profissional</h3>
                  </div>
                  <form class="row g-3">
  <div class="col-md-10">
    <label for="validationServer01" class="form-label">Nome completo*</label>
    <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Digite o nome completo" required>
    <div id="validationServer01Feedback" class="valid-feedback">
      Nome válido!
    </div>
  </div>
  <div class="col-md-8">
    <label for="validationServer02" class="form-label">CPF*</label>
    <input type="number" class="form-control is-valid" id="validationServer02" placeholder="Digite um CPF" value="" required>
    <div id="validationServer02Feedback" class="valid-feedback">
      CPF válido!
    </div>
  </div>
  
  <div class="col-md-8">
    <label for="validationServer03" class="form-label">Número de celular*</label>
    <input type="number" class="form-control is-invalid" id="validationServer03" placeholder="(00) 0 0000-0000" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Digite um número válido!
    </div>
  </div>
  
  <div class="col-md-5">
    <label for="validationServer04" class="form-label">Estado*</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" placeholder="Selecione" required>
      <option selected disabled value="">Tocantins</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Selecione seu Estado.
    </div>
  </div>
   <div class="col-md-5">
    <label for="validationServer04" class="form-label">Cidade*</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" placeholder="Selecione" required>
      <option selected disabled value=""></option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Selecione sua cidade.
    </div>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">PRÓXIMO</button>
  </div>
</form>
                  
    
                 </div>
              </div> 
          </div>
     </div>
</template>

<script>
export default {
  name: 'PrimeiraPagina',
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
   width: 800px;
   height: 700px;
   background-color: white;
   position:relative;
   align-items: center;
   align-content: center;
   display: block;
   direction: initial;
   margin: 50px auto;
   border-radius: 30px;
   box-shadow: 0 0 3em;

 }
 .conteudo{
   position: relative;
   padding-top: 30px;
   padding-left: 50px;
   width: 500px;
   height: 700px;
 }
.img{
  position:absolute;
  flex-direction: row;
  padding-left: 400px;
  padding-top: 200px;
}
 .img-fluid{
   width: 400px;
   
   position:absolute;
   
 }
</style>
