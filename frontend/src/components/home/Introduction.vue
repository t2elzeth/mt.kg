<template>
  <div class="main">
    <img class="mt-logo" src="../../assets/homepage/images/mt.png" alt="">
    <div class="content">
      <div class="mt-slogan">
        <p class="text-yellow">MT GROUP</p>
        <div class="innovations-close text-yellow">
          Инновация ближе
          <hr>
        </div>
      </div>
      <p>распутываем задачи бизнеса</p>
      <ul class="services-list">
        <li>AR</li>
        <li class="text-yellow">/</li>
        <li>SEO</li>
        <li class="text-yellow">/</li>
        <li>SMM</li>
        <li class="text-yellow">/</li>
        <li>WEB-DEVELOPMENT</li>
        <li class="text-yellow">/</li>
        <li>WEB-DESIGN</li>
        <li class="text-yellow">/</li>
        <li>GRAPHIC DESIGN</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped lang="scss">
@import "../../assets/common";

.main {
  font-family: 'Exo 2', sans-serif;
  display: flex;
  align-items: center;
  height: 760px;
  background-color: #272727;
  background-image: url('../../assets/homepage/images/section-1-bg.png');
  background-size: cover;

  .mt-logo {
    margin-left: 225px;
    width: 315px;
    height: 350px;
  }

  .content {
    display: block;
    color: white;
    font-size: 50px;
    margin-left: -50px;

    .mt-slogan {
      display: flex;
      align-items: center;
      margin-top: -10%;
      height: 50px;

      .innovations-close {
        font-size: 22px;
        margin-left: 30px;

        hr {
          width: 423px;
        }
      }
    }

    .services-list {
      margin-top: 25px;
      width: 85%;

      display: flex;
      list-style-type: none;
      font-size: 13px;
      justify-content: space-between;
    }
  }
}
</style>