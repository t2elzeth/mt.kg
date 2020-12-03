<template>
  <section class="main">
    <div class="content">
      <h1 class="main-text">НАШИ <span class="span-yellow ">КЛИЕНТЫ</span></h1>
      <div class="client-logos">
        <img src="../../assets/homepage/images/left-arrow.svg" alt="">
        <img src="../../assets/homepage/images/1.png">
        <img src="../../assets/homepage/images/2.png">
        <img src="../../assets/homepage/images/3.png">
        <img src="../../assets/homepage/images/4.png">
        <img src="../../assets/homepage/images/5.png">
        <img src="../../assets/homepage/images/right-arrow.svg" alt="">
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Clients"
}
</script>

<style scoped lang="scss">
.main {
  font-family: 'Exo 2', sans-serif;

  background-color: #272727;

  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    margin-top: 200px;
    width: 1090px;

    .main-text {
      font-size: 50px;

      margin: 0 0 50px 0;
      text-align: center;
      color: white;
    }

    .client-logos {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
}


</style>