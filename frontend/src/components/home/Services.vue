<template>
  <div class="main" id="services">
    <div class="content">
      <h1>Наши <span class="text-yellow">услуги</span></h1>
      <p>Мы можем предоставить любые услуги для вашего бизнеса в сфере Digital</p>

      <div class="service">
        <img class="service-photo" src="../../assets/homepage/images/service-1.png" alt="">
        <h1 class="service-number">01</h1>
        <div class="service__text">
          <p class="service__header">
            <span class="text-yellow">Веб</span> разработка
          </p>
          <p class="service__description">
            Мы знаем, что каждый бизнес индивидуален, и не работаем с шаблонными
            решениями. Мы создаем уникальные
            сайты любого типа и сложности: квизы, лендинги, интернет-магазины, сайты-визитки, корпоративные
            порталы, сайты для гос. учереждений.
          </p>
          <a href="#">еще...</a>
        </div>
      </div>
      <div class="service second-service">
        <div class="service__text">

          <p class="service__header">
            <span class="text-yellow">AR</span> реальность
          </p>
          <p class="service__description">Самый простой пример использования дополненной реальности — QR-коды. С
            помощью них можно дополнить продукт той информацией, которая, например, не помещается на упаковку,
            можно рассказать историю компании посетителям офиса, дополнить текст в журнале видео- и
            аудио-материалами. AR может погрузить потребителей в более интерактивный и подробный контент.</p>

          <a href="#">еще...</a>
        </div>
        <h1 class="service-number">02</h1>
        <img class="service-photo" src="../../assets/homepage/images/service-2.png" alt="">
      </div>
      <div class="service third-service">
        <img class="service-photo" src="../../assets/homepage/images/service-3.png" alt="">
        <h1 class="service-number">03</h1>
        <div class="service__text">
          <p class="service__header">
            <span class="text-yellow">Дрон</span>вертайзинг
          </p>
          <p class="service__description">
            Дронвертайзинг — абсолютно новаторский и технологичный тип подачрекламы
            в Кыргызстане. Несколько рекламных площадок, на которые однозначно обратят внимание. Все
            предоставляемые платформы для рекламы создаются только для одной цели-привлечь и захватить внимание
            максимального количества людей.
          </p>
          <a href="#">еще...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped lang="scss">
@import "../../assets/common";

.main {
  font-family: 'Exo 2', sans-serif;
  background: #272727;
  height: 1750px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 1260px;
    height: 1535px;
    text-align: center;
    color: white;
    font-size: 18px;

    h1 {
      font-size: 50px;
      margin: 0 0 20px;
    }

    .service {
      margin-top: 50px;
      width: 1100px;
      height: 540px;
      display: flex;
      align-items: center;

      .service-number {
        font-size: 130px;
        margin-top: 0;
        opacity: 0.1;
      }

      .service-photo {
        justify-self: start;
        width: 750px;
        height: 540px;
      }

      .service__text {
        width: 500px;
        height: 290px;
        margin-top: 40px;
        text-align: left;

        font-size: 15px;
        word-spacing: 5px;
        line-height: 1.5;

        .service__header {
          font-size: 31px;
        }

        a {
          text-decoration: none;
          color: yellow;
        }

        .service__description {
          margin-top: 20px;
          margin-bottom: 20px;
          width: 100%;
        }
      }

      &.second-service {
        margin-top: -100px;
        margin-left: 160px;
      }

      &.third-service {
        margin-top: -20px;
      }
    }
  }
}
</style>