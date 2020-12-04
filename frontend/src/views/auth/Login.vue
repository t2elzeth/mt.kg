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

import {useVuelidate} from '@vuelidate/core';

import {success, error} from "@/utils/notifications";
import {formData} from "@/utils/forms";
import {rules} from "@/utils/validators";

export default {
  name: "Login",
  components: {
    FormField,
  },
  setup() {
    const loginFormData = formData.login;

    const loginRules = rules.login();

    const v$ = useVuelidate(loginRules, loginFormData)

    function login() {
      // If data is valid
      v$.value.$touch();

      console.log(loginFormData)

      if (v$.value.$invalid) {
        return error("Data is invalid!")
      }

      success("You were logged in successfully").finally(() =>
          location.reload()
      );
    }

    return {
      login,
      v$,
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
