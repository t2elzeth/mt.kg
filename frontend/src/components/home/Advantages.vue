<template>
  <div class="main" id="about">
    <h1 class="header">Наши <span class="text-yellow"> достоинства</span></h1>
    <p style="padding: 50px 0 50px 0;">Мы знаем, что бизнес индивидуален, и не работаем с шаблонными решениями</p>
    <div class="grid">
      <div class="grid-item yellow-border">
        <img src="../../assets/homepage/images/light-bulb.svg" alt="">
        <h1>Креатив</h1>
        <p>Мы знаем, что каждый бизнес индивидуален, и не работаем с шаблонными решениями. Мы создаем
          уникальные сайты любого типа и сложности: квизы, лендинги, интернет-магазины, сайты-визитки,
          корпоративные порталы, сайты для гос. учереждений.</p>
      </div>
      <div class="grid-item yellow-border">
        <div class="grid-item__wrapper">
          <img src="../../assets/homepage/images/aim.svg" alt="">
          <h1>Точность</h1>
          <p>Можно вкладывать бесконечно много денег в трафик, но без удобного и приятного сайта все это
            не
            имеет значения. Именно поэтому сайт ваш главный инструмент позиционирования. Очень важно
            понимать пользователя и упрощать его путь от
            первого знакомства до оставления заявки</p>
        </div>
      </div>
      <div class="grid-item yellow-border">
        <div class="grid-item__wrapper">
          <img src="../../assets/homepage/images/experience.svg" alt="">
          <h1>Опыт</h1>
          <p>Мы предлагаем многоплановую реализацию вашего проекта профессиональными специалистами.
            Результат,
            который вы получите и будет вашим преимуществом перед конкурентами</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages"
}
</script>

<style scoped lang="scss">
@import "../../assets/common";

.main {
  font-family: 'Exo 2', sans-serif;
  background: #272727;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  height: 700px;

  .header {
    margin-top: 220px;
    font-size: 50px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 330px);
    width: 1125px;
    grid-gap: 36px;
    text-align: left;

    .grid-item {
      border-radius: 6px;
      border: 1px solid #E3C819;

      font-size: 15px;
      padding: 15px;

      h1 {
        font-size: 31px;
        padding: 25px 0;
      }
    }
  }
}
</style>