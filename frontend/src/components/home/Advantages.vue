<template>
  <div class="main" id="about">
    <div class="container">
      <div class="section-3-headers">
        <h1>Наши <span class="span-yellow"> достоинства</span></h1>
        <p style="padding-bottom: 65px;">Мы знаем, что бизнес индивидуален, и не работаем с шаблонными решениями
        </p>
      </div>
    </div>
    <div class="section-3__content">
      <div class="container">
        <div class="grid-container">
          <div class="grid-item yellow-border">
            <div class="grid-item__wrapper">
              <img src="../../assets/homepage/images/light-bulb.svg" alt="">
              <h1>Креатив</h1>
              <p>Мы знаем, что каждый бизнес индивидуален, и не работаем с шаблонными решениями. Мы создаем
                уникальные сайты любого типа и сложности: квизы, лендинги, интернет-магазины, сайты-визитки,
                корпоративные порталы, сайты для гос. учереждений.</p>
            </div>
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
    </div>
  </div>
</template>

<script>
export default {
name: "Advantages"
}
</script>

<style scoped>
.main {
  background: #272727;
  color: white;

  font-family: 'Exo 2', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 700px;
}

.section-3__content {
  width: 1125px;
}

.section-3-headers > h1 {
  display: flex;
  margin-top: 220px;

  justify-content: center;
  font-size: 50px;
}

.section-3-headers > p {
  display: flex;
  justify-content: center;
}

.section-3-headers span {
  margin-left: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 330px);
  width: 1125px;
  grid-gap: 36px;
}

.grid-item {
  display: flex;
  justify-content: center;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #E3C819;
}

.grid-item__wrapper {
  width: 100%;
  height: 100%;
  padding: 15px;
  color: white;
}

.grid-item__wrapper > h1 {
  font-size: 31px;
}

.grid-item__wrapper > p {
  font-size: 15px;
}
</style>