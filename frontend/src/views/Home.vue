<template>
  <Header/>
  <Introduction/>
  <Services/>
  <Advantages/>
  <Clients/>
  <ContactUsForm/>
</template>

<script>
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import Services from "@/components/home/Services";
import Advantages from "@/components/home/Advantages";
import Clients from "@/components/home/Clients";
import ContactUsForm from "@/components/home/ContactUsForm";

export default {
  name: 'Home',
  components: {
    Header, Introduction,
    Services, Advantages,
    Clients, ContactUsForm
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap");
@import "../assets/common.css";
</style>
