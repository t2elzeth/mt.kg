<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li><img src="../../assets/homepage/images/logo.png" alt="" id="logo"></li>
        <li><a href="#">Главная</a></li>
        <li><a href="#services">Услуги</a></li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
    </nav>
    <div class="text-us">
      <div class="phone-number">
        <img src="../../assets/homepage/images/phone.svg" alt="">
        <span>+996 555 013 331</span>
      </div>
      <a href="tel:+996507707774" class="text-us-btn yellow-border">
        <button>Позвонить</button>
      </a>
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

#logo {
  margin-top: 30%;
}

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

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  .text-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;

    .phone-number {
      color: #FFE500;
      width: 100%;


    }

    .text-us-btn {
        font-family: 'Raleway', sans-serif;
        font-size: 13px;
        margin-left: 2rem;
        border-radius: 2px;
        width: 100%;
        padding: 0.35rem 0;

        > button {
          width: 100%;
          background: #272727;
          color: white;
          border: none;
        }

        button:focus {
          outline: none;
        }

        button:hover {
          cursor: pointer;
        }


      }

  }
}
</style>