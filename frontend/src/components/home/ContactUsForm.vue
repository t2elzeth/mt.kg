<template>
  <div class="main" id="contacts">
    <h3><span class="text-yellow">Напишите</span> нам</h3>
    <div class="form__wrapper">
      <form class="form" @submit.prevent="submit">
        <div class="inputs-row">
          <FormField
              :v$field="v$.first_name"
              placeholder="Имя"
              form-field="first_name"
          />
          <FormField
              :v$field="v$.last_name"
              placeholder="Фамилия"
              form-field="last_name"
          />
        </div>
        <div class="inputs-row">
          <FormField
              :v$field="v$.phone"
              placeholder="Номер телефона"
              form-field="phone"
          />
          <FormField
              :v$field="v$.email"
              placeholder="Почта"
              form-field="email"
          />
        </div>
        <FormField
            :v$field="v$.comment"
            placeholder="Дополнительно"
            form-field="comment"
            field-type="textarea"
        />
        <button class="submit-btn" id="submitBtn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";

import {success, error} from "@/utils/notifications";
import {formData} from "@/utils/forms";
import {rules} from "@/utils/validators";
import {sendMessage} from "@/utils/tgBotAPI";

import {useVuelidate} from '@vuelidate/core'

export default {
  name: "ContactUsForm",
  components: {
    FormField
  },
  setup() {
    const contactFormData = formData.contactUs;
    const formDataRules = rules.contactUs();
    const v$ = useVuelidate(formDataRules, contactFormData);

    function submit() {
      v$.value.$touch();

      if (v$.value.$invalid) {
        error('Введенные вами данные не корректны', 'Ошибка!');
        return;
      }

      const text = `
Full name: ${contactFormData.first_name.value} ${contactFormData.last_name.value}
Email: ${contactFormData.email.value}
Phone: ${contactFormData.phone.value}
Comment: ${contactFormData.comment.value}
`

      sendMessage(text)
      success('Ваша форма успешно отправлена!', 'Успешно!')
          .finally(() => location.reload());
    }

    return {
      submit,
      contactFormData, v$
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/common";
@import "../../assets/mixins";

.main {
  font-family: 'Exo 2', sans-serif;
  background: #272727 url("../../assets/homepage/images/bg.png") no-repeat;
  background-size: cover;
  height: 780px;
  color: white;
  text-align: center;
  padding-top: 100px;

  .form__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .form {
      width: 875px;
      display: grid;
      grid-template-rows: repeat(2, 50px) 200px 50px;
      grid-column-gap: 30px;
      grid-row-gap: 50px;
      color: white;

      .inputs-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }

    .submit-btn {
      @include input-default;

      width: 100%;
      height: 100%;
      color: white;
      border: 1px solid #E3C819;

      &:focus {
        outline: none;
        background: rgba(59, 59, 59, 0.4);
      }
    }
  }
}

</style>