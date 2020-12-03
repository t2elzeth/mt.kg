<template>
  <div class="main">
    <footer class="container">
      <div class="section__footer__content">
        <div class="footer__contacts">
          Наши <span class="span-yellow">контакты</span>
          <p><img src="../assets/homepage/images/home-address.png" alt="">Адрес: Ул.Токтогула 110 <br> (БЦ
            «Премиум», 6 этаж)</p>
          <p><img src="../assets/homepage/images/time.png" alt="">Пн-Сб: 9:00-19:00</p>
        </div>
        <div class="footer__services">
          <span class="span-yellow">Услуги</span>
          <div class="footer-services-elem">
            <div>
              <p>AR реальность</p>
              <p>Веб разработка</p>
              <p>Дронвертайзинг</p>
              <p>SMM услуги</p>
              <p>SEO продвижение</p>
            </div>
            <div>
              <p>Веб дизайн</p>
              <p>Графический дизайн</p>
              <p>Рост личного бренда</p>
              <p>Продвижение бизнеса</p>
              <p>Инста маски</p>
            </div>
          </div>
        </div>
        <div class="footer__socials">
          Социальные <span class="span-yellow"></span>сети
          <div class="social-media">
            <a href="https://www.facebook.com/MT-Group-KG-103944618185110/?view_public_for=103944618185110"><img
                src="../assets/homepage/images/facebook.png" alt=""></a>
            <a href=""><img src="../assets/homepage/images/whatsapp.png" alt=""></a>
            <a href="https://t.me/MTGroupkg"><img src="../assets/homepage/images/tele.png" alt=""></a>
            <a href="https://www.instagram.com/mtgroup.kg/"><img src="../assets/homepage/images/insta.png"
                                                                 alt=""></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

.main {
  font-family: 'Exo 2', sans-serif;
  height: 380px;
  background-color: #272727;
  color: white;
}

.section__footer > .container {
  justify-content: space-around;
  align-items: center;
  height: 100%;
  font-size: 24px;
}

.section__footer__content {
  width: 100%;
  height: 160px;

  display: flex;
  justify-content: space-around;
}

.social-media {
  margin-top: 20px;
  width: 205PX;
  display: flex;
  justify-content: space-between;
}

.footer-services-elem {
  font-family: "Raleway";
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 325px;
}

.footer__contacts > p {
  font-size: 15px;
}

.footer__contacts > p img {
  margin-right: 10px;
}
</style>