<template>
  <div class="main">
    <img class="mt-logo" src="../../assets/homepage/images/mt.png" alt="">
    <div class="mt-2">
      <div class="mt-slogan">
        <p>MT GROUP</p>
        <div class="innovations-close">
          Инновация ближе
          <hr>
        </div>
      </div>
      <p>распутываем задачи бизнеса</p>
      <div class="services-list">
        <ul>
          <li>AR</li>
          <li class="span-yellow">/</li>
          <li>SEO</li>
          <li class="span-yellow">/</li>
          <li>SMM</li>
          <li class="span-yellow">/</li>
          <li>WEB-DEVELOPMENT</li>
          <li class="span-yellow">/</li>
          <li>WEB-DESIGN</li>
          <li class="span-yellow">/</li>
          <li>GRAPHIC DESIGN</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped lang="scss">
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

  .mt-2 {
    display: block;
    color: white;
    font-size: 50px;
    margin-left: -50px;

    hr {
      width: 423px;
    }

    p {
      font-size: 50px;
      margin-top: 0;
    }

    .mt-slogan {
      display: flex;
      align-items: center;
      color: #FFE500;
      margin-top: -5%;
      height: 50px;

      .innovations-close {
        font-size: 22px;
        padding-left: 30px;
      }
    }

    .services-list {
      margin-top: 25px;
      width: 85%;

      ul {
        display: flex;
        list-style-type: none;
        padding-inline-start: 0;
        font-size: 13px;
        justify-content: space-between;
      }
    }
  }
}
</style>