<template>
  <header class="header">
    <nav class="nav">
      <img src="../../assets/homepage/images/logo.png" alt="" id="logo">
      <a href="#">Главная</a>
      <a href="#services">Услуги</a>
      <a href="#about">О нас</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <div class="contact-us">
        <span class="phone-number">
          <img src="../../assets/homepage/images/phone.svg" alt="">
          +996 555 013 331
        </span>
      <a href="tel:+996507707774" class="yellow-border">Позвонить</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap');
@import "../../assets/common";

.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #272727;
  color: white;
  height: 70px;

  .nav {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
      position: relative;
      top: 5px;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }

  .contact-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;

    .phone-number {
      color: #FFE500;
      width: 100%;
    }

    a {
      font-family: 'Raleway', sans-serif;
      font-size: 13px;
      width: 340px;

      text-align: center;
      text-decoration: none;
      border-radius: 2px;

      padding: 0.35rem 0;
      background: #272727;
      color: white;
    }
  }
}
</style>