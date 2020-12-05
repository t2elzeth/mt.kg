<template>
  <div class="main">
    <form @submit.prevent="login" class="form">
      <FormField
          :v$field="v$.username"
          placeholder="Имя пользователя"
          form-field="username"
      />

      <FormField
          :v$field="v$.password"
          placeholder="Пароль"
          form-field="password"
      />

      <button type="submit" class="login-btn">Login</button>
    </form>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";

import axios from "axios";
import {useVuelidate} from "@vuelidate/core";

import {urls} from "@/utils/api";
import {success, error} from "@/utils/notifications";
import {formData} from "@/utils/forms";
import {rules} from "@/utils/validation";
import {auth} from "@/utils/auth";

export default {
  name: "Login",
  components: {
    FormField,
  },
  setup() {
    const loginFormData = formData.login,
        loginRules = rules.login(),
        v$ = useVuelidate(loginRules, loginFormData);

    function login() {
      // Check if data is valid
      v$.value.$touch();
      if (v$.value.$invalid) return error("Data is invalid!")

      axios.post(urls.login, {
        username: loginFormData.username.value,
        password: loginFormData.password.value
      })
          .then((res) => {
            success("Вы успешно вошли в свой аккаунт!", "Успешно!")
                .finally(() => location.reload());
            auth.setCredentials(res.data)
          })
          .catch(() => {
            error("Что-то пошло не так", "Ошибка!")
                .finally(() => location.reload())
          })
    }

    return {
      login, v$,
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/mixins";

.main {
  width: 100%;
  height: 100vh;

  background: #272727;

  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;

    .login-btn {
      @include input-default;

      width: 100%;
      padding: 5px 0;
    }
  }
}
</style>
